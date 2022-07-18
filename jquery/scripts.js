$(document).ready(function () {
  $("html,body").css({
    padding: "0",
    margin: "0",
    color: "white",
    "scroll-behavior": "smooth",
  });
  $("body").css("background-color", "rgb(249, 191, 239)");
  $("body").append("<nav></nav>");
  $("nav").css({
    "background-color": "rgb(148, 3, 197)",
    padding: "15px",
    display: "flex",
    "justify-content": "space-between",
    "font-weight": "bold",
  });
  $("nav").append(
    "<a id='j1' href='#cards-container'>cards</a>",
    "<a id='j2' href='#show-form'>choose jwelleries</a>",
    "<div id='about'><a href='#'>about</a></div>"
  );
  $("#about").css({
    "padding-left": "5%",
    "padding-right": "10%",
  });

  $("body").append(
    "<ul id='about-list'><li>email: fateme.abdellahii@gmail.com</li><li><a style='text-decoration: none;' href='https://www.linkedin.com/in/fateme-abdellahi-b21181221'>linkedIn: click</a></li><li><a style='text-decoration: none;' href='https://github.com/fateme-abdellahi'>github: click</a></li></ul>"
  );
  $("#about-list")
    .css({
      width: "30%",
      "list-style": "none",
      padding: "5px",
      display: "none",
      "background-color": "rgb(148, 3, 197)",
      position: "absolute",
      right: "0",
      top: "33px",
      "margin-right": "0",
      "word-wrap": "break-word",
    })
    .children("li:not(:last)")
    .css("border-bottom", "1px solid rgb(148, 3, 220)");

  $("#about").click(function () {
    $("#about-list").slideToggle(300);
  });

  $("body").append("<div id='cards-container'></div>");
  $("#cards-container")
    .css({
      "margin-top": "100px",
      display: "flex",
      "flex-wrap": "wrap",
      "justify-content": "space-around",
    })
    .append(
      `<div style='font-size:larger;padding:50px'>to see each picture's info click on the picture and to see the picture again click on the info (for mousedown card mousedown on the picture and if you mouseup on the info the picture will be shown again)</div>`
    )
    .append(
      `<div id="card1" class='card'><button>hover</button><div>loading...</div></div>`,
      `<div id='card2' class='card'><button>click</button><div>loading...</div></div>`,
      `<div id='card3' class='card'><button>double click</button><div>loading...</div></div>`,
      `<div id='card4' class='card'><button>mouse down</button><div>loading...</div></div>`
    );

  $("#card1").hover(function () {
    $("#card1>div").stop(true).slideToggle(1000);
  });
  $("#card2 button").click(function () {
    $("#card2>div").stop(true).slideToggle(1000);
  });
  $("#card3").dblclick(function () {
    $("#card3>div").stop(true).slideToggle(1000);
  });
  $("#card3").blur(function () {
    $("#card3>div").slideUp(1000);
  });
  $("#card4").mousedown(function () {
    $("#card4>div").stop(true).slideDown(1000);
  });
  $("#card4").mouseup(function () {
    $("#card4 div").slideUp(1000);
  });

  $("body").append(
    "<button id='show-form'>add jwellery to favorites</button>"
  );

  $("html").append("<footer></footer");
  $("footer")
    .append(
      "<p>developer info</p>",
      "<ul style='padding:0'><li>email: fateme.abdellahii@gmail.com</li><li><a style='text-decoration: none;' href='https://www.linkedin.com/in/fateme-abdellahi-b21181221'>linkedIn: click</a></li><li><a style='text-decoration: none;' href='https://github.com/fateme-abdellahi'>github: click</a></li></ul>",
      "<p>&copy; all rights reserved</p>"
    )
    .css({
      "background-color": "rgb(148, 3, 197)",
      height: "200px",
      display: "flex",
      "flex-direction": "column",
      "text-align": "center",
    });
  $("footer li").css("list-style", "none");

  $.ajax({
    type: "get",
    url: "https://fakestoreapi.com/products/category/jewelery",
    success: function (data) {
      const items = data;
      let l = 0;
      for (i of $(".card")) {
        $(i)
          .children("div")
          .html(
            `<img src=${items[l].image} alt=${items[l].title} width=100% height=300px>
            <div style="text-align:left;display:none;padding:20px">
                <p>description: ${items[l].description}</p>
                <p>price: ${items[l].price}</p>
                <p>rating count:${items[l].rating.count}</p>
                <p>rate:${items[l].rating.rate}</p>
            </div>
            `
          );
        l++;
      }

      $("#card1 img").click(function () {
        $(this).stop(true).fadeToggle(300);
        $(this).next().stop(true).fadeToggle(1000);
      });
      $("#card1>div>div").click(function () {
        $(this).stop(true).fadeToggle(300);
        $(this).prev().stop(true).fadeToggle(1000);
      });

      $("#card2>div>div").click(function () {
        $(this).prev().stop(true).animate({ width: "100%" }, 1000);
        $(this).hide(1000);
      });

      $("#card2 img").click(function () {
        $(this).stop(true).animate({ width: 0 }, 1000).hide(1000);
        $(this).next().show(1000);
      });

      $("#card3 img").click(function () {
        $(this).stop(true).toggle(3000);
        $(this).next().stop(true).toggle(1000);
      });
      $("#card3>div>div").click(function () {
        $(this).stop(true).toggle(3000);
        $(this).prev().stop(true).toggle(1000);
      });

      $("#card4 img").mousedown(function () {
        $(this).stop(true).toggle(1000);
        $(this).next().stop(true).toggle(1000);
      });
      $("#card4>div>div").mouseup(function () {
        $(this).stop(true).toggle(10);
        $(this).prev().stop(true).toggle(10);
      });

      $("body").append(
        `<form>
        <input placeholder="search jwellery" />
        <label>choosed</label>
          <div id="choosed-items"></div>
          <div id="all-items"></div>
          <button type="button">hide form</button></form>`
      );

      $("form").css({
        "background-color": "rgb(0, 255, 47)",
        color: "black",
        display: "flex",
        "flex-direction": "column",
        padding: "20px",
        margin: "0 10% 10% 10%",
      });
      $("form").hide();
      $("body>button").click(function () {
        $("form").stop(true).slideDown(1000);
      });
      $("form button").css({
        border: "none",
        padding: "7px",
        "background-color": "rgb(200, 255, 200)",
        "margin-top": "20px",
      });
      $("form input").css({ border: "none", "margin-bottom": "20px" });
      $("#choosed-items").css({
        "margin-bottom": "20px",
        border: "2px dashed rgb(0,255,250)",
        display: "flex",
      });
      for (i of items) {
        $("#all-items").append(
          `<div style="border:1px solid;background-color:rgb(255,210,210);cursor:pointer"><img style="vertical-align:middle" src=${i.image} alt=${i.title} width=25px height=25px>
          <span>${i.title}</span></div>`
        );
      }
      $("#all-items>div").click(function () {
        $(this).remove();
        $(this).find("img").appendTo("#choosed-items");
      });
      $("input").bind("input", function () {
        for (item of $("#all-items").find("span")) {
          if (
            item.innerHTML.toLowerCase().includes($(this).val().toLowerCase())
          ) {
            $(item).parent().show();
          } else {
            $(item).parent().hide();
          }
        }
      });
      $("form button").click(function () {
        $("form").slideUp(1000);
      });
    },
    error: function () {
      $("body").html("<p>something went wrong</p>");
      $("footer").remove();
    },
  });
});
