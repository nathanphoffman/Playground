package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default() // includes logging and panic-recovery middleware

	r.GET("/hello/:name", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello, " + c.Param("name")})
	})

	r.Run(":3000")
}
