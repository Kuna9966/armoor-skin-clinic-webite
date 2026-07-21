# OmniRoute AI Environment Setup — ROLLBACK GUIDE
# Generated: 2026-07-21
# System: Debian 13 (trixie), Kernel 6.12.94, i5-13450HX, RTX 3050 6GB

## IMPORTANT: Save this file somewhere safe before starting setup.

---

## Quick Rollback (One Command)

If everything is broken and you want to revert ALL changes:

```bash
bash /tmp/omniroute-setup/rollback.sh
```

If /tmp was cleared (reboot), use the manual steps below.

---

## What Gets Modified During Setup

| Step | Modification | Risk Level |
|------|-------------|------------|
| APT sources | Add `non-free` to /etc/apt/sources.list | LOW — purely additive |
| NVIDIA drivers | Install nvidia-driver + cuda-toolkit (~2GB) | HIGH — kernel module, display |
| pnpm | npm install -g pnpm | NONE — global npm package |
| Bun | Install to ~/.bun/ | NONE — user directory only |
| uv | Install to ~/.local/bin/ | NONE — user directory only |
| GitHub CLI | apt install gh | LOW — system package |
| Ollama | Install to /usr/local/bin/ | LOW — single binary |
| ComfyUI | Clone to ~/ComfyUI/ + pip install | NONE — isolated directory |
| SD WebUI | Clone to ~/stable-diffusion-webui/ | NONE — isolated directory |
| llama.cpp | Download binary to ~/llama.cpp/ | NONE — isolated directory |
| OmniRoute | npm install (node_modules/) | NONE — project-local |
| Docs | New files in docs/ | NONE — new files only |

---

## BEFORE STATE (Captured at setup time)

### APT Sources (BEFORE)
```
deb http://deb.debian.org/debian/ trixie main non-free-firmware
deb-src http://deb.debian.org/debian/ trixie main non-free-firmware
deb http://security.debian.org/debian-security trixie-security main non-free-firmware
deb-src http://security.debian.org/debian-security trixie-security main non-free-firmware
deb http://deb.debian.org/debian/ trixie-updates main non-free-firmware
deb-src http://deb.debian.org/debian/ trixie-updates main non-free-firmware
```

### Installed NVIDIA Packages (BEFORE)
```
clinfo                              3.0.25.02.14-1
firmware-nvidia-graphics            20250410-2
ocl-icd-libopencl1:amd64           2.3.3-1
xserver-xorg-video-nouveau          (if present)
```
No nvidia-driver, no cuda-toolkit, no nvidia-kernel-dkms installed.

### Global npm Packages (BEFORE)
None (fresh — npm list -g returns empty or minimal).

### Pip Packages (BEFORE)
System packages only — no user-installed AI packages.

---

## Manual Rollback Steps

### 1. NVIDIA Driver Rollback (Most Critical)

#### If install failed (apt error, DKMS build error):
```bash
# Clean up failed install
sudo apt purge -y nvidia-driver nvidia-cuda-toolkit nvidia-kernel-dkms nvidia-kernel-dkms-dkms 2>/dev/null
sudo apt autoremove -y
sudo apt update
echo "NVIDIA install cleaned up. System uses nouveau."
```

#### If install succeeded but display is broken (black screen, SDDM won't start):
```
1. Press Ctrl+Alt+F2 → drops to TTY console
2. Login: kuna
3. Run:
```
```bash
sudo apt purge -y nvidia-driver nvidia-cuda-toolkit nvidia-kernel-dkms*
sudo apt autoremove -y
sudo apt-mark unhold nvidia-driver nvidia-cuda-toolkit nvidia-kernel-dkms 2>/dev/null
sudo reboot
```
```
4. System should boot with nouveau (open-source) driver
5. Display will work at reduced performance but no GPU compute
```

#### If display works but nvidia-smi fails:
```bash
# Check if module is loaded
lsmod | grep nvidia
# If empty, module didn't load:
sudo modprobe nvidia
# If modprobe fails, driver version mismatch — purge and reinstall:
sudo apt purge -y nvidia-driver*
sudo apt install -y nvidia-driver nvidia-cuda-toolkit
sudo reboot
```

### 2. APT Sources Rollback

```bash
sudo cp /tmp/omniroute-setup/sources.list.bak /etc/apt/sources.list
sudo cp -r /tmp/omniroute-setup/sources.list.d.bak/* /etc/apt/sources.list.d/
sudo apt update
echo "APT sources restored to original state."
```

If /tmp is cleared, manually restore — the BEFORE state is documented above in this file.

### 3. GitHub CLI Rollback

```bash
sudo apt purge -y gh
echo "GitHub CLI removed."
```

### 4. Ollama Rollback

```bash
sudo rm -f /usr/local/bin/ollama
sudo rm -rf /usr/share/ollama/
# Also check if a systemd service was created:
sudo systemctl stop ollama 2>/dev/null
sudo systemctl disable ollama 2>/dev/null
sudo rm -f /etc/systemd/system/ollama.service
sudo systemctl daemon-reload
echo "Ollama removed."
```

### 5. Bun Rollback

```bash
rm -rf ~/.bun/
# Remove from PATH in ~/.bashrc if added:
# (edit ~/.bashrc, remove the bun PATH line)
echo "Bun removed."
```

### 6. uv Rollback

```bash
rm -f ~/.local/bin/uv ~/.local/bin/uvx
rm -rf ~/.local/share/uv/
echo "uv removed."
```

### 7. ComfyUI Rollback

```bash
rm -rf ~/ComfyUI/
echo "ComfyUI removed."
```

### 8. Stable Diffusion WebUI Rollback

```bash
rm -rf ~/stable-diffusion-webui/
echo "SD WebUI removed."
```

### 9. llama.cpp Rollback

```bash
rm -rf ~/llama.cpp/
echo "llama.cpp removed."
```

### 10. pnpm Rollback

```bash
npm uninstall -g pnpm
echo "pnpm removed."
```

### 11. OmniRoute node_modules Rollback

```bash
cd ~/OmniRoute
rm -rf node_modules/
git checkout package-lock.json 2>/dev/null
echo "OmniRoute node_modules cleared."
```

### 12. Documentation Rollback

```bash
cd ~/OmniRoute
git clean -fd docs/system-report.md docs/local-tools.md docs/installation-report.md docs/providers/
echo "Setup docs removed."
```

---

## Nuclear Option: Full System Restore

Remove EVERYTHING that was installed:

```bash
# 1. Restore APT sources
sudo cp /tmp/omniroute-setup/sources.list.bak /etc/apt/sources.list
sudo cp -r /tmp/omniroute-setup/sources.list.d.bak/* /etc/apt/sources.list.d/

# 2. Remove ALL packages installed after backup
BEFORE_SORTED=$(sort /tmp/omniroute-setup/dpkg-selections-before.txt)
AFTER_CURRENT=$(dpkg --get-selections)
# Find new packages (installed but not in before list)
diff <(echo "$BEFORE_SORTED") <(echo "$AFTER_CURRENT") | grep "^>" | awk '{print $2}' | \
  xargs sudo apt purge -y 2>/dev/null
sudo apt autoremove -y

# 3. Remove user-space tools
rm -rf ~/.bun/
rm -f ~/.local/bin/uv ~/.local/bin/uvx
rm -rf ~/.local/share/uv/
rm -rf ~/ComfyUI/
rm -rf ~/stable-diffusion-webui/
rm -rf ~/llama.cpp/
npm uninstall -g pnpm 2>/dev/null

# 4. Remove Ollama
sudo rm -f /usr/local/bin/ollama
sudo rm -rf /usr/share/ollama/
sudo systemctl stop ollama 2>/dev/null
sudo systemctl disable ollama 2>/dev/null
sudo rm -f /etc/systemd/system/ollama.service
sudo systemctl daemon-reload

# 5. Clean OmniRoute
cd ~/OmniRoute
rm -rf node_modules/
git checkout package-lock.json 2>/dev/null

# 6. Update package index
sudo apt update

echo ""
echo "=== ROLLBACK COMPLETE ==="
echo "System restored to pre-setup state."
echo "Reboot recommended if NVIDIA was installed."
```

---

## Disk Space Recovery

After rollback, reclaim space:

```bash
# Check disk after cleanup
df -h /
# Expected: ~2GB recovered from NVIDIA packages
# Expected: ~5-10GB recovered from ComfyUI + SD WebUI
# Expected: ~500MB recovered from llama.cpp
# Expected: ~200MB recovered from OmniRoute node_modules
```

---

## Emergency: Display Server Recovery

If SDDM/X11/Wayland is completely broken and TTY doesn't help:

```bash
# Boot from recovery mode:
# 1. Reboot → hold Shift (GRUB menu)
# 2. Select "Advanced options for Debian"
# 3. Select recovery mode entry
# 4. Drop to root shell
# 5. Purge NVIDIA:
apt purge -y nvidia-driver* nvidia-cuda-toolkit* nvidia-kernel-dkms*
apt autoremove -y
# 6. Reboot
```

---

## Files Created During Setup

These files are NEW (not modifications to existing files):

```
~/Desktop/ROLLBACK-GUIDE.md          ← THIS FILE
/tmp/omniroute-setup/                 ← Backup directory
/tmp/omniroute-setup/rollback.sh      ← Auto rollback script
~/OmniRoute/docs/system-report.md
~/OmniRoute/docs/local-tools.md
~/OmniRoute/docs/installation-report.md
~/OmniRoute/docs/providers/*.md       ← 27 provider docs
~/ComfyUI/                            ← Cloned repo
~/stable-diffusion-webui/             ← Cloned repo
~/llama.cpp/                          ← Downloaded binaries
~/.bun/                               ← Bun runtime
~/.local/bin/uv                       ← uv package manager
~/.config/opencode/                   ← OpenCode config (minimal changes)
~/OmniRoute/node_modules/             ← npm install output
```

---

## Contact / Help

If stuck after rollback:
- TTY console: Ctrl+Alt+F2
- Recovery mode: Hold Shift during boot → GRUB → Advanced → Recovery
- The RTX 3050 will always work with nouveau (open-source) driver
- System is fully functional without NVIDIA proprietary drivers (just no CUDA)
