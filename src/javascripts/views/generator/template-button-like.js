const createLikedButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like blue">
    Disukai <div class="space"> </div>
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikeButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like dark">
    Suka <div class="space"> </div>
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export { createLikedButton, createLikeButton };
