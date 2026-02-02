#!/bin/bash
# Safety hook: Protect sensitive files from editing
# Exits with code 2 to block, with a descriptive message

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Protected file patterns
PROTECTED_PATTERNS=(
    "\.env$"
    "\.env\."
    "credentials"
    "secrets"
    "\.pem$"
    "\.key$"
    "id_rsa"
    "id_ed25519"
    "\.git/config"
    "\.git/hooks"
    "\.gitconfig"
    "package-lock\.json$"
    "yarn\.lock$"
    "pnpm-lock\.yaml$"
    "\.ssh/"
    "\.aws/"
    "\.gnupg/"
)

for pattern in "${PROTECTED_PATTERNS[@]}"; do
    if echo "$FILE_PATH" | grep -qiE "$pattern"; then
        echo "BLOCKED: Attempting to modify protected file" >&2
        echo "Pattern matched: $pattern" >&2
        echo "File: $FILE_PATH" >&2
        echo "" >&2
        echo "If you really need to edit this file, tell Claude explicitly to proceed." >&2
        exit 2
    fi
done

exit 0
