var initData = require('./init-data.js')
var initItems = initData.getInitTerms();

Sandbox.define('/init', 'GET', function(req, res) {
    state.items = state.items || [];
    state.items=initItems;
    return res.json({status: "ok"});
});

Sandbox.define('/item', 'POST', function(req, res) {
    state.items = state.items || [];
    data=req.body.item;
    max_id_string=_.orderBy(state.items,'id',"desc")[0].id;
    data.id= (parseInt(max_id_string)+1).toString();
 
    state.items.push(data);
    return res.json({status: "ok"});
});

Sandbox.define('/item', 'DELETE', function(req, res) {
    state.items = state.items || [];
    data=req.body.item;
    _.dropWhile(state.items,{id:data.id});
    return res.json({status: "ok"});
});

Sandbox.define('/item/{id}', 'GET', function(req, res) {
    var id = req.params.id;
    var items= state.items || [];
    var result=_.find(state.items,{id:id});
    return res.json(200,{id:result.id,title:result.title,more:result.more,detail:result.glance,status:200});
});

Sandbox.define('/item','GET', function(req, res) {
    var items=state.items || [];
    return res.json(200,{data:items,status:200});
})