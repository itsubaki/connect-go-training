SHELL := /bin/bash

install:
	go install github.com/bufbuild/buf/cmd/buf@latest
	go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install connectrpc.com/connect/cmd/protoc-gen-connect-go@latest
	npm install --save-dev @bufbuild/buf @connectrpc/protoc-gen-connect-es @bufbuild/protoc-gen-es
	npm install @connectrpc/connect @connectrpc/connect-web @bufbuild/protobuf

generate:
	buf lint
	buf generate
	go mod tidy

serve:
	go get golang.org/x/net/http2
	go get connectrpc.com/connect
	go run cmd/server/main.go

httpreq:
	curl --header "Content-Type: application/json" \
    --data '{"name": "Jane"}' \
    http://localhost:8081/greet.v1.GreetService/Greet

grpcreq:
	grpcurl -protoset <(buf build -o -) -plaintext \
    -d '{"name": "Jane"}' \
    localhost:8080 greet.v1.GreetService/Greet
