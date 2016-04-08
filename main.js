var API_PATH = "http://opendata.khcc.gov.tw/public/OD_khcc_pubart.ashx?SDate=2016/04/03&EDate=2016/10/03";
function getData(cb) 
{
  $.ajax
  (
    {
    url : API_PATH,
    method : "GET",
    success : function(data) 
    {
      cb(null, data);
    },
    error : function(err) 
    {
      cb(err);
    }
  });
  
}