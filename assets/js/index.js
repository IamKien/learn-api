// fetch("https://api.github.com/users/muhammadhaekal/followers")
//   .then(response => {
//     return response.json();
//   })
//   .then(datas => {
//     var follower_list = document.getElementById("follower_list");
//     var innerHTML = "";
//     datas.map((data, index) => {
//       innerHTML += `
//       <div class="col-sm-6 col-md-4 mb-2">
//         <div class="card" >
//           <img class="card-img-top" src="${
//             data.avatar_url
//           }" alt="Card image cap">
//           <div class="card-body">
//             <h5 class="card-title">${data.login}</h5>
//             <p class="card-text">${data.html_url}</p>
//             <a href="${data.html_url}" class="btn btn-primary">Visit Profile</a>
//           </div>
//         </div>
//       </div>`;
//       follower_list.innerHTML = innerHTML;
//     });
//   });

// fetch("https://api.github.com/users/muhammadhaekal/followers")
//   .then(response => {
//     return response.json();
//   })
//   .then(datas => {
//     return datas;
//     console.log(datas);
//   });

var getData = function() {
  return fetch("https://api.github.com/users/muhammadhaekal/followers")
    .then(response => {
      return response.json();
    })
    .then(datas => {
      console.log(datas);
      return datas;
    });
};
//
// getData();

getData().then(datas => {
  var follower_list = document.getElementById("follower_list");
  var innerHTML = "";
  datas.map((data, index) => {
    innerHTML += `
      <div class="col-sm-6 col-md-4 mb-2">
        <div class="card" >
          <img class="card-img-top" src="${
            data.avatar_url
          }" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data.login}</h5>
            <p class="card-text">Profile: ${data.html_url}</p>
            <a href="${data.html_url}" class="btn btn-primary">Visit Profile</a>
          </div>
        </div>
      </div>`;
    follower_list.innerHTML = innerHTML;
  });
});
// var datas = await getDatas();
