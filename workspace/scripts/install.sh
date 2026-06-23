#!/bin/bash

# Install OpenCode
curl -fsSL https://opencode.ai/install | bash
echo 'export PATH="/root/.opencode/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# simbolic link
# ln -s /root/.opencode/bin/opencode /usr/local/bin/opencode