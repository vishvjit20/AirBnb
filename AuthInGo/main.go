package main

import (
	"AuthInGo/app"
	"fmt"
)

func main () {
	fmt.Println("Hello, World!")
	config := app.Config{
		Addr: ":3001",
	}
	app := &app.Application{
		Config: config,
	}

	app.Run()
}
