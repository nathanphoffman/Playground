package main

import (
	"context"
	"log"
	"net"

	pb "playground/grpc/hellopb"

	"google.golang.org/grpc"
)

type server struct{ pb.UnimplementedGreeterServer }

func (server) SayHello(_ context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello, " + req.GetName()}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal(err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, server{})
	log.Println("gRPC server listening on :50051")
	log.Fatal(s.Serve(lis))
}
