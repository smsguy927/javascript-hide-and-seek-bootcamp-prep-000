function getFirstSelector(selector) {
  /*
  which accepts a selector and
    returns the first element that matches.
  */
  return document.querySelector(selector);
}

function nestedTarget() {
  /*
  that pulls a `.target` out of `#nested`
    (`#` is used for IDs in selectors — but you knew that because you [read the docs][docs],
    right? :) ). (Note that in `index.html` `#nested` and `.target` just
    _happen_ to be `div`s. This method should work with arbitrary elements.)
  */
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  /*
  that increases the ranks in all of the
    `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]
  */
  const rankedLists = document.querySelectorAll('.ranked-list');
  
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children;
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }

}

function deepestChild() {
  /*
  that pulls out the most deeply nested child
    element from `div#grand-node`. (Remember, you can iterate over elements and call
    `querySelector()` and `querySelectorAll()` on them. This is challenging to
    implement correctly, but not beyond your ability!)
    */
}
