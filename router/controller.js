module.exports = function(app)
{
    app.get("/", function(req, res)
    {
        var date = new Date();

        var render_Data = {
            
            str : "문자열",
            number : 100,
            date : date

        };

       res.render("indexejs.ejs", render_Data);
    });

    app.get("/test", function(req, res)
    {
      res.render("test.ejs");
    });
};