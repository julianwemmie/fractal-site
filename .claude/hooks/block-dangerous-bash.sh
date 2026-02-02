#!/bin/bash
# Safety hook: Block dangerous bash commands
# Exits with code 2 to block, with a descriptive message

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Dangerous patterns that could harm the system
DANGEROUS_PATTERNS=(
    "rm -rf /"
    "rm -rf ~"
    "rm -rf \$HOME"
    "rm -rf /*"
    "sudo rm"
    "sudo mv"
    "sudo chmod"
    "sudo chown"
    "mkfs"
    "dd if="
    ":(){:|:&};:"  # Fork bomb
    "> /dev/sd"
    "chmod -R 777 /"
    "chown -R"
    "shutdown"
    "reboot"
    "init 0"
    "init 6"
    "killall"
    "pkill -9"
    "mv /* "
    "mv / "
    "wget.*|.*sh"
    "curl.*|.*sh"
    "curl.*|.*bash"
    "wget.*|.*bash"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if echo "$COMMAND" | grep -qiE "$pattern"; then
        echo "BLOCKED: Potentially dangerous command detected" >&2
        echo "Pattern matched: $pattern" >&2
        echo "Command: $COMMAND" >&2
        echo "" >&2
        echo "If you really need to run this, tell Claude explicitly to proceed." >&2
        exit 2
    fi
done

# Check for commands that delete outside current directory
if echo "$COMMAND" | grep -qE "rm.*\.\." || echo "$COMMAND" | grep -qE "rm.*/Users(?!/julia/Documents/code/fractal-tech)"; then
    echo "BLOCKED: rm command targeting files outside project directory" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "If you really need to run this, tell Claude explicitly to proceed." >&2
    exit 2
fi

# Protect .claude/hooks directory from deletion
if echo "$COMMAND" | grep -qE "rm.*\.claude/hooks"; then
    echo "BLOCKED: Attempting to delete .claude/hooks directory or files" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "The hooks directory contains safety scripts. If you really need to delete it, tell Claude explicitly." >&2
    exit 2
fi

exit 0
