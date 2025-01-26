# **OS Module - NodeJs** #

1. os.Platform(): Returns the OS platform(e.g., "win23" for Windows, "linux" for Linux, "darwin" for macOS).
- Usage: Useful for writing cross-platform application.
1. os.arch(): Returns the CPU architecture(e.g., 'x64', 'arm').
- Usage: Helps optimize code for specific architectures.
1. ox.freemem(): Returns the amount of free system memory in bytes.
- Usage: Useful for monitoring system performance.
1. os.totalmem(): Returns the total system memory in bytes.
- Usage: Provides insights into the machine's capacity.
1. os.uptime(): Returns the system uptime in seconds.
- Usage: Commonly used in logging or monitoring tools || Useful for storing temporary data.
1. os.homedir(): Returns the home directory of the current user.
- Usage: Useful for locating user-specific files.
1. os.hostname(): Returns the hostname of the system.
- Usage: Useful for loggin or identifying machines in networks.
1. os.networkInterfaces(): Return an object with details about the network interfaces.
- Usage: Helps in network diagnostics or configuration.
1. os.cpus(): Returns details about each logical CPU/core.
- Usage: Helps optimize code for multi-core processing.
1. os.tmpdir(): Returns the default directory for temporary files.
