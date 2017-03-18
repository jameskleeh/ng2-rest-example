package test.ng2.profile

class BootStrap {

    def init = { servletContext ->
        new User("admin", "admin").save(flush: true, failOnError: true)
    }
    def destroy = {
    }
}
