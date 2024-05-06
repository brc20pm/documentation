---
id: installation
title: Installation
sidebar_label: INSTALLATION
slug: /installation/indexer
--- 



## Download Link

```bash
https://github.com/BitScpt-BTC/release/releases
```

## Configuration Items
`BitScpt.json`
```json
{
   "network":2,
   "rpc":{
     "Host":"127.0.0.1:8334",
     "User": "vendersen",
     "Pass": "123456",
     "HTTPPostMode": true,
     "DisableTLS": false
   },
   "CertPath": "C:\\Users\\ec\\Desktop\\cersfile\\rpc.cert"
}

Network: 0 is the official network, 1 is the test network, 2 is the local test environment
rpc: Bitcoin full node configuration item based on Go language [BTCD]
CertPath: rpc node connection certificate


rpc and CertPath can be empty when running the local test environment
```


## Start Node

```bash
#Run the following command in your Linux server
$ nohup ./bitscpt &
```

## Port

**Local**
 - 8765

**TestNet**
 - 8763

**MainNet**
 - 8761


