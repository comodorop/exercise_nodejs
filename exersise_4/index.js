var winston = require("winston");
winston.configure({
  transports: [new winston.transports.File({ filename: "somefile.log" })]
})

winston.log("info", "Hello distributed log files!")
winston.info("Hello again distributed logs")

winston.level = "debug"
winston.log("debug", "Now my debug messages are written to console!")
