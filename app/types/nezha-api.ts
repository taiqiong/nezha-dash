export type serverApi = {
  live_servers: number;
  offline_servers: number;
  total_bandwidth: number;
  result: NezhaAPISafe[];
};

export type NezhaAPISafe = Omit<NezhaAPI, "ipv4" | "ipv6" | "valid_ip">;

export interface NezhaAPI {
  id: number;
  name: string;
  tag: string;
  last_active: number;
  ipv4: string;
  ipv6: string;
  valid_ip: string;
  host: NezhaAPIHost;
  status: NezhaAPIStatus;
}

export interface NezhaAPIHost {
  Platform: string;
  PlatformVersion: string;
  CPU: string[];
  MemTotal: number;
  DiskTotal: number;
  SwapTotal: number;
  Arch: string;
  Virtualization: string;
  BootTime: number;
  CountryCode: string;
  Version: string;
  GPU: null;
}

export interface NezhaAPIStatus {
  CPU: number;
  MemUsed: number;
  SwapUsed: number;
  DiskUsed: number;
  NetInTransfer: number;
  NetOutTransfer: number;
  NetInSpeed: number;
  NetOutSpeed: number;
  Uptime: number;
  Load1: number;
  Load5: number;
  Load15: number;
  TcpConnCount: number;
  UdpConnCount: number;
  ProcessCount: number;
  Temperatures: number;
  GPU: number;
}
