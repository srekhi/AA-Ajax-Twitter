const APIUtil = require("./api_util");
const FollowToggle = require("./follow_toggle");

class UsersSearch {
  constructor($userNav) {
    this.$userNav = $userNav;
    this.$ul = $userNav.find("ul");
    this.$input = $userNav.find("input");
    this.$input.on('keyup', this.handleInput.bind(this));
  }

  handleInput(e) {
    APIUtil.searchUsers(e.currentTarget.value, this.renderResults.bind(this));
  }

  renderResults(users) {
    this.$ul.find("li").remove();
    users.forEach((user) => {
      // let options = {userId: user.id, followState: user.followed};
      const $button = $('<button class="follow-toggle"></button>').data("user-id", user.id).data("initial-follow-state", user.followed);
      const button = $button[0];
      let li = `<li><a href = /users/${user.id}>${user.username}</a>${button}</li>`;
      debugger;
      this.$ul.append(li);

    });
    // console.log(users);
  }

}

module.exports = UsersSearch;
