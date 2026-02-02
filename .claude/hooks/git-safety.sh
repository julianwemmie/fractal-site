#!/bin/bash
# Safety hook: Git safety guardrails
# Exits with code 2 to block, with a descriptive message

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Dangerous git patterns
if echo "$COMMAND" | grep -qiE "git\s+push.*--force|git\s+push.*-f"; then
    echo "BLOCKED: Force push detected" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "Force pushing can overwrite remote history. If you really need this, tell Claude explicitly." >&2
    exit 2
fi

if echo "$COMMAND" | grep -qiE "git\s+reset\s+--hard"; then
    echo "BLOCKED: Hard reset detected" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "Hard reset discards uncommitted changes. If you really need this, tell Claude explicitly." >&2
    exit 2
fi

if echo "$COMMAND" | grep -qiE "git\s+clean\s+-fd"; then
    echo "BLOCKED: git clean -fd detected" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "This permanently deletes untracked files. If you really need this, tell Claude explicitly." >&2
    exit 2
fi

if echo "$COMMAND" | grep -qiE "git\s+rebase.*-i|git\s+rebase.*--interactive"; then
    echo "BLOCKED: Interactive rebase detected" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "Interactive rebase requires manual input and can rewrite history." >&2
    exit 2
fi

if echo "$COMMAND" | grep -qiE "git\s+push.*origin\s+(main|master)\s*$" && echo "$COMMAND" | grep -qiE "--force|-f"; then
    echo "BLOCKED: Force push to main/master branch" >&2
    echo "Command: $COMMAND" >&2
    echo "" >&2
    echo "This is extremely dangerous. If you REALLY need this, tell Claude explicitly." >&2
    exit 2
fi

exit 0
