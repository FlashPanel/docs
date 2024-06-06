# Typesense Server

huong dan su dung typesense server trên flashpanel blabla

## Cài đặt

blabla

## WordPress

cài plugin abc

tạo admin key

```bash
# day la api key khi cai dat ung dung
TYPESENSE_API_KEY=abcxyz

# tao admin key
curl 'http://localhost:8108/keys' \
    -X POST \
    -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{"description":"Admin key.","actions": ["*"], "collections": ["*"]}'

# tao search only api key
curl 'http://localhost:8108/keys' \
    -X POST \
    -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
    -H 'Content-Type: application/json' \
    -d '{"description":"Search-only companies key.","actions": ["documents:search"], "collections": ["companies"]}'

```

## Truy cập typesense vơi domain

