const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");
$(() => {
  let followButtons = $('.follow-toggle');
  followButtons.each(function(index, el) {
    const $el = $(el);
    new FollowToggle($el);
  });

  let usersSearch = $('.users-search');
  usersSearch.each(function(index, userNav) {
    const $userNav = $(userNav);
    new UsersSearch($userNav);
  });
});
