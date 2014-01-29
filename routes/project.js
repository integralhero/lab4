exports.viewProject = function(req, res) { 
  // controller code goes h
  var name = req.params.name;
  console.log("The project name is: " + name);
  res.render('project', {
    'projectName': name
  });
};