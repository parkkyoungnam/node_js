module.exports = function(app)
{
    app.get("/", function(req, res)
    {
        /*
        var html = "<!DOCTYPE html>"
        + "<html>"
        + "<head>"
        + "<meta charset = 'utf-8' />"
        + "</head>"
        + "<body>"
        + "<h1>ROOT</h1>"
        + "</body>"
        + "</html>"

        res.send(html);
        */

        res.render("index.html");
    });

    app.get("/test", function(req, res)
    {
        // res.send("TEST");
        res.render("test.html");
    });
};