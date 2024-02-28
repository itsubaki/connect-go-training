package main

import (
	"context"
	"log"
	"net/http"

	greetv1 "github.com/itsubaki/connect-go-training/gen/greet/v1"
	"github.com/itsubaki/connect-go-training/gen/greet/v1/greetv1connect"

	"connectrpc.com/connect"
)

func main() {
	client := greetv1connect.NewGreetServiceClient(
		http.DefaultClient,
		"http://localhost:8081",
	)
	res, err := client.Greet(
		context.Background(),
		connect.NewRequest(&greetv1.GreetRequest{Name: "Jane"}),
	)
	if err != nil {
		panic(err)
	}

	log.Println(res.Msg.Greeting)
}
