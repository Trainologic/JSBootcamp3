$(function () {
    let url = 'https://jsonplaceholder.typicode.com';
    const localUrl = 'http://localhost:3000';


    let $gameWrapper = $('#gameWrapper');

    (function () {
        let posts = getPosts()
            .then((posts) => {
                console.log(posts[0]);
            });
        console.log('the rest of the app!');
    })();

    function addPost(item) {
        /* let elem = document.createElement('div');
         elem.className = 'post-wrapper';
         */

        let $post = $('<div class="post-wrapper">');
        $post.append($('<h3>').text(item.title))
            .append($('<p>').text(item.body));
        $gameWrapper.append($post);
    }

    function getPosts() {
        let promise = new Promise((resolve, reject) => {
            let postsPromise = $.get(url + '/posts')
                .then((data) => {
                        console.log('posts here!');
                        data = data.map((post) => {
                            post.date = new Date();
                            return post;
                        });
                        resolve(data);

                        /*data.map((post, index) => {
                            if (index > 10) { // demonstration only!
                                return {};
                            }

                            addPost(post);
                        })*/
                    },
                    (error) => {
                        reject({
                            success: false,
                            innerError: error
                        })
                    });
        });
        return promise;
    }

    window.createNewPost = function () {
        /*$.post(url + '/posts', {
            title: 'No! You don\'t even believe that! Gus has cameras eve',
            body: 'Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus \' suus \'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! '
        })
            .then((newItem) => {
                addPost(newItem);
            });
            */

        let data = JSON.stringify({
            title: 'No! You don\'t even believe that! Gus has cameras eve',
            body: 'Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus \' suus \'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! '
        });

        $.ajax({
            url: url + '/posts',
            method: 'POST',
            headers: {
                contentType: 'text',
            },
            data: {
                title: 'No! You don\'t even believe that! Gus has cameras eve',
                body: 'Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam? Ut terrorem facit, qui quid. Terrent! Ut alter, scarier pisces agminis off. Et quod tu es? Vos blowfish. Tu iustus in omnibus visio. Vides ... suus \' suus \'non aliud aerem. Nunc ... qui cum partibus blowfish Isai? Tu damnare ius. Vos blowfish. Dicere iterum. Dicere illam quasi velis eam. Es BLOWFISH! '
            }
        }).then((newItem) => {
            addPost(newItem);
        });
    }


    window.login = function () {
        let username = $('input[name=username]').val();
        let password = $('input[name=password]').val();

        let loadingIndex = 0;
        let $loading = $('.loading');

        let loadingInterval = setInterval(() => {
            $loading.text('Loading' + '.'.repeat(loadingIndex));
            loadingIndex++;
        }, 500);

        $.post('/login', {
            username,
            password
        }).then((res) => {
                $('form').remove();
                $('body').prepend($('<h3>Welcome Home!</h3>'))
                clearInterval(loadingInterval);
                $loading.text('');
            },
            (rejReason) => {
                console.log(rejReason);
                clearInterval(loadingInterval);
                $loading.text('');
            }
        );

    }


    /*Promise.all([postsPromise, commentsPromise])
        .then((data) => {

        });*/


});