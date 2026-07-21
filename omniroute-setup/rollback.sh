#!/bin/bash
# OmniRoute AI Environment Setup — Automated Rollback Script
# Generated: 2026-07-21
# Usage: bash /tmp/omniroute-setup/rollback.sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

BACKUP_DIR="/tmp/omniroute-setup"

echo -e "${RED}============================================${NC}"
echo -e "${RED}  OmniRoute Setup — FULL ROLLBACK${NC}"
echo -e "${RED}============================================${NC}"
echo ""
echo -e "${YELLOW}This will revert ALL system changes made during setup.${NC}"
echo -e "${YELLOW}Backup directory: ${BACKUP_DIR}${NC}"
echo ""

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    echo -e "${RED}Do NOT run this script as root. Run as normal user (kuna).${NC}"
    exit 1
fi

# Verify backup exists
if [ ! -f "${BACKUP_DIR}/sources.list.bak" ]; then
    echo -e "${RED}Backup files not found at ${BACKUP_DIR}${NC}"
    echo "Backup may have been lost (reboot cleared /tmp?)."
    echo "See ~/Desktop/ROLLBACK-GUIDE.md for manual steps."
    exit 1
fi

read -p "Proceed with rollback? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    echo "Rollback cancelled."
    exit 0
fi

echo ""
echo -e "${GREEN}[1/8] Restoring APT sources...${NC}"
sudo cp "${BACKUP_DIR}/sources.list.bak" /etc/apt/sources.list
sudo cp -r "${BACKUP_DIR}/sources.list.d.bak/"* /etc/apt/sources.list.d/ 2>/dev/null
sudo apt update -qq

echo -e "${GREEN}[2/8] Removing NVIDIA packages (if installed)...${NC}"
sudo apt purge -y nvidia-driver nvidia-cuda-toolkit nvidia-kernel-dkms nvidia-kernel-dkms-dkms 2>/dev/null || true
sudo apt purge -y nvidia-driver* nvidia-cuda-toolkit* 2>/dev/null || true
sudo apt autoremove -y -qq
sudo apt-mark unhold nvidia-driver nvidia-cuda-toolkit nvidia-kernel-dkms 2>/dev/null || true

echo -e "${GREEN}[3/8] Removing GitHub CLI...${NC}"
sudo apt purge -y gh 2>/dev/null || true

echo -e "${GREEN}[4/8] Removing Ollama...${NC}"
sudo rm -f /usr/local/bin/ollama
sudo rm -rf /usr/share/ollama/
sudo systemctl stop ollama 2>/dev/null || true
sudo systemctl disable ollama 2>/dev/null || true
sudo rm -f /etc/systemd/system/ollama.service
sudo systemctl daemon-reload 2>/dev/null || true

echo -e "${GREEN}[5/8] Removing Bun...${NC}"
rm -rf ~/.bun/

echo -e "${GREEN}[6/8] Removing uv...${NC}"
rm -f ~/.local/bin/uv ~/.local/bin/uvx
rm -rf ~/.local/share/uv/

echo -e "${GREEN}[7/8] Removing AI tools (ComfyUI, SD WebUI, llama.cpp)...${NC}"
rm -rf ~/ComfyUI/
rm -rf ~/stable-diffusion-webui/
rm -rf ~/llama.cpp/

echo -e "${GREEN}[8/8] Cleaning npm/pip packages and OmniRoute node_modules...${NC}"
npm uninstall -g pnpm 2>/dev/null || true
pip3 uninstall -y huggingface_hub 2>/dev/null || true
pip3 uninstall -y cohere 2>/dev/null || true
cd ~/OmniRoute 2>/dev/null && rm -rf node_modules/ && git checkout package-lock.json 2>/dev/null || true

echo ""
echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  ROLLBACK COMPLETE${NC}"
echo -e "${GREEN}============================================${NC}"
echo ""
echo "Summary of removed items:"
echo "  - APT sources restored to original"
echo "  - NVIDIA drivers purged (nouveau active)"
echo "  - GitHub CLI removed"
echo "  - Ollama removed"
echo "  - Bun removed"
echo "  - uv removed"
echo "  - ComfyUI removed"
echo "  - SD WebUI removed"
echo "  - llama.cpp removed"
echo "  - pnpm removed"
echo "  - OmniRoute node_modules cleared"
echo ""
echo -e "${YELLOW}Reboot recommended if NVIDIA was installed.${NC}"
echo ""
df -h /
