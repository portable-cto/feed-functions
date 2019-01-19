#!/bin/sh

echo Pushing update to "$RANCHER_BASE_URL"/v3/project/c-s48ls:p-26zxx/workloads/deployment:default:feed-functions

curl -s -o /dev/null -w "%{http_code}" -X PUT \
  "$RANCHER_BASE_URL"/v3/project/c-s48ls:p-26zxx/workloads/deployment:default:feed-functions \
  -H "Authorization: Bearer $RANCHER_API_BEARER_TOKEN" \
  -H 'Content-Type: application/json' \
  -d "{\"annotations\": {\"cattle.io/timestamp\": \"$(date --utc +%FT%TZ)\"}}"
