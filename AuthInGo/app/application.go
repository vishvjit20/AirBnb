package app

import (
	"fmt"
	"net/http"
	"time"
)

type Config struct {
	Addr string
}

type Application struct {
	Config Config
}

func (a *Application) Run() error {
	server := &http.Server{ 
		Addr: a.Config.Addr,
		Handler: nil, // TODO: Setup Chi Router
		ReadTimeout: 10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	fmt.Println("Starting server on", a.Config.Addr)

	return server.ListenAndServe()
}