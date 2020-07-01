function submit() {
  const name = $('#name').val();
  const sex = $('#sex').val();
  const age = $('#age').val();
  const mobile = $('#mobile').val();
  $.ajax({
    url: `http://47.92.141.244:3000/my/add?name=${name}&age=${age}&sex=${sex}&mobile=${mobile}`,
    type: "GET",
    success: (res) => {
      refreshList();
    }
  });
}

function refreshList() {
  $.ajax({
    url: 'http://47.92.141.244:3000/my/getlist',
    type: "GET",
    success: (res) => {
      if (res && res.code && res.code === 200 && res.data) {
        let data = res.data.list;
        let html = '';
        data.forEach((val) => {
          html += `<div>姓名:${val.name}-性别:${val.sex}-年龄:${val.age}-手机:${val.mobile}</div>`;
        });
        $('#list').html(html);
      }
    }
  });
}