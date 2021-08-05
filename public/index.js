//############ Metodos Firebase #################
//Pega metodos do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC1qSGpeYOMjLSMsfWp0Trh8ZWT7v6jXvk",
    authDomain: "animale-site.firebaseapp.com",
    databaseURL: "https://animale-site-default-rtdb.firebaseio.com",
    projectId: "animale-site",
    storageBucket: "animale-site.appspot.com",
    messagingSenderId: "705477879045",
    appId: "1:705477879045:web:bd382a7d3e29b0828f836c",
    measurementId: "G-5WE8M8XWKH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Abre conexao com firebase Database
var database = firebase.database();

//Salva na coleção do Database
function firebasePush(lead) {

    // database = firebase.database().ref('EmailLeads').push().set({
    //     lead
    // });

    // [START rtdb_write_new_user_completion]
    firebase.database().ref('EmailLeads').push().set({
        name: lead.name,
        email: lead.email,
        assunto: lead.subject,
        mensagem: lead.message
    }, (error) => {
        if (error) {
            // The write failed...
            alert('Erro no envio motivo desconhecido.');
        } else {
            // Data saved successfully!
            alert('Email enviado com sucesso.');
        }
    });
    // [END rtdb_write_new_user_completion]

}
//############ FIM Metodos Firebase #################

//Envio de emails
var nodemailer = require('nodemailer');

function enviaEmail(formData) {

    const emailGmail = 'administracao@animallediagnosticos.com.br';
    const senha = 'axxmkqkvthquxenp';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailGmail,
            pass: senha
        }
    });

    const mailoptions = {
        from: emailGmail,
        to: emailGmail,
        subject: `Enviado pelo site: Assunto: ${formData.subject}`,
        html: `<p>Nome: ${formData.name} '</p><p>Email:' ${formData.email} '</p><p>Mensagem:' ${formData.message}</p>`,
        text: `Nome: ${formData.name} '<br />Email:' ${formData.email} '<br />Mensagem:' ${formData.message}`
    }

    transporter.sendMail(mailoptions, (error, data) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email enviado:' + data.response);
            res.send('success');
        }
    });
}

//Formulario fale conosco
const formulario = document.querySelector(".contato-form");

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    firebasePush(formData);
    //enviaEmail(formData);

    // name.value = '';
    // email.value = '';
    // subject.value = '';
    // message.value = '';

});


// Menu Hamburguer Lateral
var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});

//Cookes
(() => {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);
})();

// Voltar ao TOPO
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
            // $('div[class="hamburguer"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
            // $('div[class="hamburguer"]').fadeOut();
        }
    });

    // $('a[href="#top"]').click(function () {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 800);
    //     return false;
    // });
});

// Feed do instagram
! function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports && "string" != typeof exports.nodeName ? module.exports = t() : e.Instafeed = t()
}(this, function () {
    function e(e, t) {
        if (!e) throw new Error(t)
    }

    function t(t) {
        e(!t || "object" == typeof t, "options must be an object, got " + t + " (" + typeof t + ")");
        var o = {
            accessToken: null,
            accessTokenTimeout: 5e3,
            after: null,
            apiTimeout: 5e3,
            debug: !1,
            error: null,
            filter: null,
            limit: 4,
            mock: !1,
            render: null,
            sort: null,
            success: null,
            target: "instafeed",
            template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
            templateBoundaries: ["{{", "}}"],
            transform: null
        };
        if (t)
            for (var n in o) void 0 !== t[n] && (o[n] = t[n]);
        e("string" == typeof o.target || "object" == typeof o.target, "target must be a string or DOM node, got " + o.target + " (" + typeof o.target + ")"), e("string" == typeof o.accessToken || "function" == typeof o.accessToken, "accessToken must be a string or function, got " + o.accessToken + " (" + typeof o.accessToken + ")"), e("number" == typeof o.accessTokenTimeout, "accessTokenTimeout must be a number, got " + o.accessTokenTimeout + " (" + typeof o.accessTokenTimeout + ")"), e("number" == typeof o.apiTimeout, "apiTimeout must be a number, got " + o.apiTimeout + " (" + typeof o.apiTimeout + ")"), e("boolean" == typeof o.debug, "debug must be true or false, got " + o.debug + " (" + typeof o.debug + ")"), e("boolean" == typeof o.mock, "mock must be true or false, got " + o.mock + " (" + typeof o.mock + ")"), e("object" == typeof o.templateBoundaries && 2 === o.templateBoundaries.length && "string" == typeof o.templateBoundaries[0] && "string" == typeof o.templateBoundaries[1], "templateBoundaries must be an array of 2 strings, got " + o.templateBoundaries + " (" + typeof o.templateBoundaries + ")"), e(!o.template || "string" == typeof o.template, "template must null or string, got " + o.template + " (" + typeof o.template + ")"), e(!o.error || "function" == typeof o.error, "error must be null or function, got " + o.error + " (" + typeof o.error + ")"), e(!o.after || "function" == typeof o.after, "after must be null or function, got " + o.after + " (" + typeof o.after + ")"), e(!o.success || "function" == typeof o.success, "success must be null or function, got " + o.success + " (" + typeof o.success + ")"), e(!o.filter || "function" == typeof o.filter, "filter must be null or function, got " + o.filter + " (" + typeof o.filter + ")"), e(!o.transform || "function" == typeof o.transform, "transform must be null or function, got " + o.transform + " (" + typeof o.transform + ")"), e(!o.sort || "function" == typeof o.sort, "sort must be null or function, got " + o.sort + " (" + typeof o.sort + ")"), e(!o.render || "function" == typeof o.render, "render must be null or function, got " + o.render + " (" + typeof o.render + ")"), e(!o.limit || "number" == typeof o.limit, "limit must be null or number, got " + o.limit + " (" + typeof o.limit + ")"), this._state = {
            running: !1
        }, this._options = o
    }
    return t.prototype.run = function () {
        var e = this,
            t = null,
            o = null,
            n = null,
            r = null;
        return this._debug("run", "options", this._options), this._debug("run", "state", this._state), this._state.running ? (this._debug("run", "already running, skipping"), !1) : (this._state.running = !0, this._debug("run", "getting dom node"), (t = "string" == typeof this._options.target ? document.getElementById(this._options.target) : this._options.target) ? (this._debug("run", "got dom node", t), this._debug("run", "getting access token"), this._getAccessToken(function (s, i) {
            if (s) return e._debug("onTokenReceived", "error", s), void e._fail(new Error("error getting access token: " + s.message));
            o = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + i, e._debug("onTokenReceived", "request url", o), e._makeApiRequest(o, function (o, s) {
                if (o) return e._debug("onResponseReceived", "error", o), void e._fail(new Error("api request error: " + o.message));
                e._debug("onResponseReceived", "data", s), e._success(s);
                try {
                    n = e._processData(s), e._debug("onResponseReceived", "processed data", n)
                } catch (t) {
                    return void e._fail(t)
                }
                if (e._options.mock) e._debug("onResponseReceived", "mock enabled, skipping render");
                else {
                    try {
                        r = e._renderData(n), e._debug("onResponseReceived", "html content", r)
                    } catch (t) {
                        return void e._fail(t)
                    }
                    t.innerHTML = r
                }
                e._finish()
            })
        }), !0) : (this._fail(new Error("no element found with ID " + this._options.target)), !1))
    }, t.prototype._processData = function (e) {
        var t = "function" == typeof this._options.transform,
            o = "function" == typeof this._options.filter,
            n = "function" == typeof this._options.sort,
            r = "number" == typeof this._options.limit,
            s = [],
            i = null,
            a = null,
            u = null,
            c = null;
        if (this._debug("processData", "hasFilter", o, "hasTransform", t, "hasSort", n, "hasLimit", r), "object" != typeof e || "object" != typeof e.data || e.data.length <= 0) return null;
        for (var l = 0; l < e.data.length; l++) {
            if (a = this._getItemData(e.data[l]), t) try {
                u = this._options.transform(a), this._debug("processData", "transformed item", a, u)
            } catch (e) {
                throw this._debug("processData", "error calling transform", e), new Error("error in transform: " + e.message)
            } else u = a;
            if (o) {
                try {
                    c = this._options.filter(u), this._debug("processData", "filter item result", u, c)
                } catch (e) {
                    throw this._debug("processData", "error calling filter", e), new Error("error in filter: " + e.message)
                }
                c && s.push(u)
            } else s.push(u)
        }
        if (n) try {
            s.sort(this._options.sort)
        } catch (e) {
            throw this._debug("processData", "error calling sort", e), new Error("error in sort: " + e.message)
        }
        return r && (i = s.length - this._options.limit, this._debug("processData", "checking limit", s.length, this._options.limit, i), i > 0 && s.splice(s.length - i, i)), s
    }, t.prototype._getItemData = function (e) {
        var t = null,
            o = null;
        switch (e.media_type) {
            case "IMAGE":
                t = "image", o = e.media_url;
                break;
            case "VIDEO":
                t = "video", o = e.thumbnail_url;
                break;
            case "CAROUSEL_ALBUM":
                t = "album", o = e.media_url
        }
        return {
            caption: e.caption,
            id: e.id,
            image: o,
            link: e.permalink,
            model: e,
            timestamp: e.timestamp,
            type: t,
            username: e.username,
            likes: e.comments_count
        }
    }, t.prototype._renderData = function (e) {
        var t = "string" == typeof this._options.template,
            o = "function" == typeof this._options.render,
            n = null,
            r = null,
            s = "";
        if (this._debug("renderData", "hasTemplate", t, "hasRender", o), "object" != typeof e || e.length <= 0) return null;
        for (var i = 0; i < e.length; i++) {
            if (n = e[i], o) try {
                r = this._options.render(n, this._options), this._debug("renderData", "custom render result", n, r)
            } catch (e) {
                throw this._debug("renderData", "error calling render", e), new Error("error in render: " + e.message)
            } else t && (r = this._basicRender(n));
            r ? s += r : this._debug("renderData", "render item did not return any content", n)
        }
        return s
    }, t.prototype._basicRender = function (e) {
        for (var t = new RegExp(this._options.templateBoundaries[0] + "([\\s\\w.]+)" + this._options.templateBoundaries[1], "gm"), o = this._options.template, n = null, r = "", s = 0, i = null, a = null; null !== (n = t.exec(o));) i = n[1], r += o.slice(s, n.index), (a = this._valueForKeyPath(i, e)) && (r += a.toString()), s = t.lastIndex;
        return s < o.length && (r += o.slice(s, o.length)), r
    }, t.prototype._valueForKeyPath = function (e, t) {
        for (var o = /([\w]+)/gm, n = null, r = t; null !== (n = o.exec(e));) {
            if ("object" != typeof r) return null;
            r = r[n[1]]
        }
        return r
    }, t.prototype._fail = function (e) {
        !this._runHook("error", e) && console && "function" == typeof console.error && console.error(e), this._state.running = !1
    }, t.prototype._finish = function () {
        this._runHook("after"), this._state.running = !1
    }, t.prototype._success = function (e) {
        this._runHook("success", e), this._state.running = !1
    }, t.prototype._makeApiRequest = function (e, t) {
        var o = !1,
            n = this,
            r = null,
            s = function (e, n) {
                o || (o = !0, t(e, n))
            };
        (r = new XMLHttpRequest).timeout = this._options.apiTimeout, r.ontimeout = function (e) {
            s(new Error("api request timed out"))
        }, r.onerror = function (e) {
            s(new Error("api connection error"))
        }, r.onload = function (e) {
            var t = r.getResponseHeader("Content-Type"),
                o = null;
            if (n._debug("apiRequestOnLoad", "loaded", e), n._debug("apiRequestOnLoad", "response status", r.status), n._debug("apiRequestOnLoad", "response content type", t), t.indexOf("application/json") >= 0) try {
                o = JSON.parse(r.responseText)
            } catch (e) {
                return n._debug("apiRequestOnLoad", "json parsing error", e, r.responseText), void s(new Error("error parsing response json"))
            }
            200 === r.status ? s(null, o) : o && o.error ? s(new Error(o.error.code + " " + o.error.message)) : s(new Error("status code " + r.status))
        }, r.open("GET", e, !0), r.send()
    }, t.prototype._getAccessToken = function (e) {
        var t = !1,
            o = this,
            n = null,
            r = function (o, r) {
                t || (t = !0, clearTimeout(n), e(o, r))
            };
        if ("function" == typeof this._options.accessToken) {
            this._debug("getAccessToken", "calling accessToken as function"), n = setTimeout(function () {
                o._debug("getAccessToken", "timeout check", t), r(new Error("accessToken timed out"), null)
            }, this._options.accessTokenTimeout);
            try {
                this._options.accessToken(function (e, n) {
                    o._debug("getAccessToken", "received accessToken callback", t, e, n), r(e, n)
                })
            } catch (e) {
                this._debug("getAccessToken", "error invoking the accessToken as function", e), r(e, null)
            }
        } else this._debug("getAccessToken", "treating accessToken as static", typeof this._options.accessToken), r(null, this._options.accessToken)
    }, t.prototype._debug = function () {
        var e = null;
        this._options.debug && console && "function" == typeof console.log && ((e = [].slice.call(arguments))[0] = "[Instafeed] [" + e[0] + "]", console.log.apply(null, e))
    }, t.prototype._runHook = function (e, t) {
        var o = !1;
        if ("function" == typeof this._options[e]) try {
            this._options[e](t), o = !0
        } catch (t) {
            this._debug("runHook", "error calling hook", e, t)
        }
        return o
    }, t
});