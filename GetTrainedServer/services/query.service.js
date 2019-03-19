let mongoose = require('mongoose'),
    Query = mongoose.model('Queries'),
    User = mongoose.model('User');

    exports.get = function (_id, callback, errCallback) {
        // console.log('query is '+ _id);
        // Query.findOne({_id:_id}, function (err, query) {
        //     if(err){ throwError(err, errCallback, "Error getting query");return}
        //     console.log('query result for '+_id+' is ' +query);
        //     callback(query);
        // });
    };

    let throwError = function (err, callback, msg) {
        callback(msg);
    };
    
    // API to save a new query
    exports.save = function (query, callback, errCallback) {
        let newQuery = new Query(query.value);
        let temp;
        let userid = query.user_id;
        User.findOne({user_id:userid},function(err,user){
            if(err){
                throwError(err, errCallback, "Error getting user");
                return;
            }
        
            temp=user.first_name+" "+user.last_name;
            newQuery.query_createdby = temp;
            newQuery.save(function (err, query) {
                if(err){
                    throwError(err, errCallback, "Error saving query");
                    return;
                } 
                callback(query);
            });
        })
    };
      //API to display a particular query
    exports.display = (req, res) => {
        Query.find(function(err, queries){
            if(err) throw err;
            else{
                res.json(queries);
            }
    
         });
}