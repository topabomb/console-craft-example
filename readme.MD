# console-craft-example

This project is created by the [weero-template](https://github.com/topabomb/weero-template.js) tool, which serves as a scaffold for creating projects with various types of templates.

> Example for [console-craft](https://github.com/topabomb/console-craft)

[console-craft](https://github.com/topabomb/console-craft) is simplify console program development, standardize program parameters and log output, and provide support for user interaction or command-line parameters to start the main program and subcommands.

## Use Cases

- Support multiple subcommands.

- Global parameters and subcommand parameters.

- Program parameters can be obtained from environment variables and the command line.

- Built-in dotenv handling, program parameters can also be obtained from dotenv.

- Parameter source priority: interactive input > command-line parameters > environment variables > dotenv.

- You can select subcommands and parameters through user interaction.

- You can directly launch subcommands through command-line parameters.

- It includes the log4js library, and you can set the log format through parameters.

- It includes Commander, Inquirer, and Chalk for enriching program interaction and appearance.
