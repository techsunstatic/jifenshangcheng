
var adQueryView = {
    display_errors: true,
    operators: [
        { type: 'equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime', 'string'] },
        { type: 'not_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime', 'string'] },
        { type: 'in', nb_inputs: 1, multiple: true, apply_to: [''] },
        { type: 'not_in', nb_inputs: 1, multiple: true, apply_to: [''] },
        { type: 'less', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'less_or_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'greater', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'greater_or_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
        { type: 'between', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'not_between', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'begins_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_begins_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'contains', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_contains', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'ends_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'not_ends_with', nb_inputs: 1, multiple: false, apply_to: ['string'] },
        { type: 'is_empty', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_not_empty', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_null', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'is_not_null', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '昨天', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '今天', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本周', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上周', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本月', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上月', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '今年', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '去年', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '本季度', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '上季度', nb_inputs: 0, multiple: false, apply_to: ['datetime'] },
        { type: '最近X天', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '最近X月', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: '最近X年', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X天以前', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X月以前', nb_inputs: 1, multiple: false, apply_to: [''] },
        { type: 'X年以前', nb_inputs: 1, multiple: false, apply_to: [''] }
    ],
    filters: [{
        id: 'tsr_productrecord.tsr_code',
        label: 'ItemCode',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_name',
        label: 'ProductName',
        type: 'string',
        operators: ['equal', 'not_equal', 'contains']
    },
    {
        id: 'tsr_productrecord.tsr_set',
        label: 'Set',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_product',
        label: 'Product',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_category1',
        label: 'Category 1',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_category2',
        label: 'Category 2',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_protein',
        label: 'Protein',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_flavor',
        label: 'Flavor',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_size',
        label: 'Size',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_daypart',
        label: 'Daypart',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_platform',
        label: 'Platform',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_withslp',
        label: 'With SLP',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_withhmtoys',
        label: 'With HM toys',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_subproduct1',
        label: 'Sub-product1',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_subproduct2',
        label: 'Sub-product2',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_subproduct3',
        label: 'Sub-product3',
        type: 'string',
        operators: ['equal', 'not_equal']
    },
    {
        id: 'tsr_productrecord.tsr_subproduct4',
        label: 'Sub-product4',
        type: 'string',
        operators: ['equal', 'not_equal']
    }
    ]
}

var isPortal = true;
//是否可以XRM
var hadXrm = false;
var Xrm;
var OrgName = "";
$(function () {

    if (window.opener != null && window.opener.Xrm != null) {
        hadXrm = true;
        Xrm = window.opener.Xrm;
        OrgName = "/" + Xrm.Page.context.getOrgUniqueName();
    }

    InitQuery();

    InitButton();
});


//调用页面需要声明该变量,t通过该变量传参数给筛选器
//var ProductManage = {
//    Rule :"json数据",
//    Name:"列表名称"
//};
//初始化按钮可用性
function InitButton() {

    if (hadXrm == true) {
        $("#cus_btn_group .btn").removeAttr("disabled");

        var tsr_createstatus = Xrm.Page.getAttribute("tsr_createstatus").getValue();
        var listType = Xrm.Page.getAttribute("tsr_type").getValue();

        //处理中
        if (tsr_createstatus == 100000001) {

            $("#cus_btn_group .btn").attr("disabled", "true");

        }

        //导入数据按钮,移除成员按钮不支持动态
        if (listType == 100000001) { //动态

            $("#btnImportFile").attr("disabled", "true");
            $("#btnRemove").attr("disabled", "true");
        }

    }

}

//初始化查找控件
function InitQuery() {

    $('#qb_customer').queryBuilder(adQueryView);

    // Fix for Selectize
    $('#qb_customer').on('afterCreateRuleInput.queryBuilder', function (e, rule) {
        if (rule.filter.plugin == 'selectize') {
            rule.$el.find('.rule-value-container').css('min-width', '200px')
                .find('.selectize-control').removeClass('form-control');
        }
    });

    if (hadXrm == true) {
        var jsonData = Xrm.Page.getAttribute("tsr_jsondata").getValue();

        if (jsonData != null && jsonData != "") {
            SetRule(JSON.parse(jsonData));
        }
    }
    else {

        //var rules_widgets = { "condition": "AND", "rules": [{ "id": "tsr_transaction.tsr_transactionid.countv2", "field": "tsr_transaction.tsr_transactionid.countv2", "type": "string", "operator": "equal", "value": "22.3" }], "valid": true };
        //SetRule(rules_widgets);
    }

}


//获取实体OTC
function getObjectTypeCode(entityName) {

    var lookupService = new window.opener.top.RemoteCommand("LookupService", "RetrieveTypeCode");
    lookupService.SetParameter("entityName", entityName);
    var result = lookupService.Execute();
    var res;
    if (result.Success && typeof (result.ReturnValue) == "number") {
        res = result.ReturnValue;
    }
    return res;
}

//重置查询
function ResetRule() {


    $('#qb_customer').queryBuilder('reset');
}

//设置查询Json
function SetRule(rule) {

    if (rule.condition != null) {

        $('#qb_customer').queryBuilder('setRules', rule);
    }
}

//查询查询
function UseQuery(optype) {
    //optype:0|1 // 0 添加列表成员 ， 1 移除列表成员, 2,全部会员    

    var jsonData = {};
    if (optype != 2) {

        var isValidate = $('#qb_customer').queryBuilder('validate');
        if (isValidate == true) {
            jsonData = $('#qb_customer').queryBuilder('getRules');
        }
        else {

            return false;
        }
    }
    var json = JSON.stringify(jsonData);
    console.log(json);
    var post = {
        Type: 0,
        JsonData: json
    };
    $.ajax({
        type: "POST",
        url: "/isv/Campaigns/Handler/basecommon.ashx?action=tosql",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(post),
        success: function (jsonResult) {
            console.log(jsonResult);
            if (jsonResult.status != "faild") {
                vm.sizerProduct(jsonResult.data);
            } else {
                alert(jsonResult.message);
            }
        }
    });
    
}
