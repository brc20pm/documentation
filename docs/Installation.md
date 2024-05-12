---
id: installation
title: Installation
sidebar_label: INSTALLATION
slug: /installation/indexer
--- 



## Download Link

```bash
https://github.com/ordscript/release/tree/main/indexer
```

## Configuration Items
`ordscript.json`
```json
{
   "network":2,
   "rpc":{
     "Host":"127.0.0.1:8334",
     "User": "userName",
     "Pass": "passWord",
     "HTTPPostMode": true,
     "DisableTLS": false
   },
   "CertPath": "rpc.cert"
}

Network: 0 is the mainNet, 1 is the testNet, 2 is the localNet
rpc: Bitcoin full node configuration item based on Go language [BTCD]
CertPath: rpc node connection certificate


rpc and CertPath can be empty when running the local test environment
```


## Start Node

```bash
#Run the following command in your Linux server
$ nohup ./ordscript &
```

## Port

**Local**
 - 8765

**TestNet**
 - 8763

**MainNet**
 - 8761


