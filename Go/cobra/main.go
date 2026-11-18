package main

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

func main() {
	var shout bool

	root := &cobra.Command{Use: "hello", Short: "A tiny CLI built with Cobra"}

	greet := &cobra.Command{
		Use:   "greet [name]",
		Short: "Say hello to someone",
		Args:  cobra.ExactArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			msg := "Hello, " + args[0]
			if shout {
				msg += "!!!"
			}
			fmt.Println(msg)
		},
	}
	greet.Flags().BoolVarP(&shout, "shout", "s", false, "add excitement")

	root.AddCommand(greet) // subcommands: `hello greet Nate`
	if err := root.Execute(); err != nil {
		os.Exit(1)
	}
}
