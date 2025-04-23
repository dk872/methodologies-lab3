FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o fizzbuzz

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=builder /app/fizzbuzz .

COPY --from=builder /app/templates ./templates

EXPOSE 8080

CMD ["/app/fizzbuzz", "serve", "--port", "8080"]
