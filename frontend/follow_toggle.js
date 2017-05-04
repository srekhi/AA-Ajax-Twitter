const APIUtil = require("./api_util");

class FollowToggle {
  constructor($el, options = {}) {
    this.$el = $el;
    this.userId = $el.data("user-id") || options.userId;
    this.followState = $el.data("initial-follow-state") || options.followState;
    this.render();
    $el.on("click", ((e) => this.handleClick(e)));
  }

  render() {
    let text;
    if (this.followState === "unfollowed") {
      text = "Follow!";
    } else if (this.followState === "followed") {
      text = "Unfollow!";
    } else {
      text = "";
    }
    this.$el.text(text);
  }

  handleClick(event) {
    // const self = this;
    event.preventDefault();
    this.$el.prop("disabled", true);
    if (this.followState === "followed") {
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.toggleFollowState();
        });
    } else {
      APIUtil.followUser(this.userId)
        .then( () => this.toggleFollowState());
    }
  }

  toggleFollowState(){
    if (this.followState === "followed"){
      this.followState = "unfollowed";
    } else {
      this.followState = "followed";
    }
    this.$el.prop("disabled", false);
    this.render();
  }
}

module.exports = FollowToggle;
