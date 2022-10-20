"use strict";
(self.webpackChunkreviti_static_holding_page =
  self.webpackChunkreviti_static_holding_page || []).push([
  [218],
  {
    8261: function (e, t, l) {
      l.d(t, {
        A: function () {
          return u;
        },
      });
      var a = l(7294),
        n = l(5414),
        r = l(1597),
        i = function (e) {
          var t = e.className;
          return a.createElement(
            "svg",
            {
              width: "74",
              height: "23",
              viewBox: "0 0 74 23",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            a.createElement(
              "g",
              { "clip-path": "url(#clip0)" },
              a.createElement("path", {
                d: "M14.6729 15.101H9.00096L5.05522 10.4733H4.74696V15.101H-0.000244141V0H8.32278C9.98739 0 11.3437 0.48713 12.3302 1.4005C13.3783 2.37476 13.8715 3.59258 13.8715 5.17576C13.8715 6.33268 13.5632 7.36784 12.9467 8.2812C12.3302 9.13368 11.467 9.7426 10.3573 10.1688L14.6729 15.101ZM4.74696 3.77526V6.81982H7.33635C7.95287 6.81982 8.38444 6.69802 8.75436 6.39358C9.12426 6.08912 9.24757 5.72378 9.24757 5.23664C9.24757 4.8104 9.06261 4.44506 8.75436 4.1406C8.38444 3.89704 7.95287 3.71436 7.33635 3.71436H4.74696V3.77526Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M28.21 11.2649V15.101H15.8795V0H28.0867V3.83614H20.6267V5.78466H27.4701V9.25546H20.6267V11.204H28.21V11.2649Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M46.274 0L39.9239 15.101H35.3L28.9497 0H34.1901L37.6427 8.52476L41.0335 0H46.274Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M52.0077 15.101H47.2605V0H52.0077V15.101Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M67.5441 3.95792H62.7967V15.101H58.0495V3.95792H53.3024V0H67.4824V3.95792H67.5441Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M73.6476 15.101H68.9621V0H73.7093V15.101H73.6476Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M30.0245 18.8184H0V23.1417H30.0245V18.8184Z",
                fill: "#00F200",
              })
            ),
            a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "clip0" },
                a.createElement("rect", {
                  width: "74",
                  height: "23",
                  fill: "white",
                })
              )
            )
          );
        },
        c = [
          { label: "Contact Us", url: "/contact-us" },
          { label: "Terms of use", url: "/terms-of-use" },
          { label: "Privacy Notice", url: "/privacy-notice" },
        ],
        s = [
          { label: "Cookie Preferences", url: "/" },
          {
            label: "Reviti Payback T&C's",
            url: "/reviti-payback-terms-and-conditions",
          },
          { label: "Amazon Voucher T&C's", url: "/amazon_incentive" },
        ],
        m = function () {
          return a.createElement(
            "footer",
            {
              className:
                " w-full mx-auto flex pb-50 flex-col container-padding",
            },
            a.createElement(
              "div",
              { className: "top py-60 " },
              a.createElement(
                "div",
                { className: "w-full md:1/2" },
                a.createElement(
                  "div",
                  { className: "logo-container w-24 flex justify-left" },
                  a.createElement(i, { className: "" })
                )
              ),
              a.createElement(
                "div",
                { className: "grid md:grid-cols-2 w-1/2 pt-10" },
                a.createElement(
                  "ul",
                  { className: "" },
                  c.map(function (e) {
                    return a.createElement(
                      "li",
                      { className: "" },
                      a.createElement(
                        r.rU,
                        {
                          className: "text-sm font-bold underline pb-4",
                          to: e.url,
                        },
                        e.label
                      )
                    );
                  })
                ),
                a.createElement(
                  "ul",
                  { className: "" },
                  s.map(function (e) {
                    return "Cookie Preferences" == e.label
                      ? a.createElement(
                          "li",
                          { className: "ml-0  pt-1" },
                          a.createElement(
                            "p",
                            {
                              id: "ot-sdk-btn",
                              className:
                                "ot-sdk-show-settings pb-1 text-sm font-bold underline cursor-pointer overwrite-cookie-styling",
                            },
                            e.label
                          )
                        )
                      : a.createElement(
                          "li",
                          { className: "ml-0" },
                          a.createElement(
                            r.rU,
                            {
                              className: "text-sm font-bold underline pb-4 ",
                              to: e.url,
                            },
                            e.label
                          )
                        );
                  })
                )
              )
            ),
            a.createElement(
              "div",
              {
                className:
                  "bottom-0 flex flex-col border-t-2 border-black pt-8 footer_legal",
              },
              a.createElement(
                "h3",
                { className: "text-sm font-semibold" },
                "Copyright © Reviti Limited 2022"
              ),
              a.createElement(
                "p",
                null,
                a.createElement("strong", null, "Reviti"),
                " is the trading name of ",
                a.createElement("strong", null, "Reviti"),
                " Limited. ",
                a.createElement("strong", null, "Reviti"),
                " Limited (",
                a.createElement("strong", null, "“Reviti”"),
                ") is not an insurance company. ",
                a.createElement("strong", null, "REVITI"),
                " is a registered trademark owned by Philip Morris Products S.A., used under license by ",
                a.createElement("strong", null, "Reviti"),
                " Limited. Scottish Friendly Assurance Society Limited (Scottish Friendly) is the underwriter of ",
                a.createElement("strong", null, "Reviti"),
                " Term Life Insurance. The registered office of ",
                a.createElement("strong", null, "Reviti"),
                " is One New Change, 4th Floor, London, EC4M 9AF, United Kingdom. Company number 11450807. Scottish Friendly Assurance Society Limited (no. SP00034F) is authorised by the Prudential Regulatory Authority and regulated by the Financial Conduct Authority and Prudential Regulatory Authority (FCA no. 110002). Its registered office address is Scottish Friendly House, 16 Blythswood Square, Glasgow, Lanarkshire, G2 4HJ, United Kingdom. Prior to 31st January 2022, ",
                a.createElement("strong", null, "Reviti"),
                " Limited was an Appointed Representative of Resolution Compliance Limited which is authorised and regulated by the Financial Conduct Authority (Financial Services Register number: 574048)."
              )
            )
          );
        },
        o = function (e) {
          var t = e.className;
          return a.createElement(
            "svg",
            {
              width: "106",
              height: "33",
              viewBox: "0 0 74 23",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
            },
            a.createElement(
              "g",
              { "clip-path": "url(#clip0)" },
              a.createElement("path", {
                d: "M14.6729 15.101H9.00096L5.05522 10.4733H4.74696V15.101H-0.000244141V0H8.32278C9.98739 0 11.3437 0.48713 12.3302 1.4005C13.3783 2.37476 13.8715 3.59258 13.8715 5.17576C13.8715 6.33268 13.5632 7.36784 12.9467 8.2812C12.3302 9.13368 11.467 9.7426 10.3573 10.1688L14.6729 15.101ZM4.74696 3.77526V6.81982H7.33635C7.95287 6.81982 8.38444 6.69802 8.75436 6.39358C9.12426 6.08912 9.24757 5.72378 9.24757 5.23664C9.24757 4.8104 9.06261 4.44506 8.75436 4.1406C8.38444 3.89704 7.95287 3.71436 7.33635 3.71436H4.74696V3.77526Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M28.21 11.2649V15.101H15.8795V0H28.0867V3.83614H20.6267V5.78466H27.4701V9.25546H20.6267V11.204H28.21V11.2649Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M46.274 0L39.9239 15.101H35.3L28.9497 0H34.1901L37.6427 8.52476L41.0335 0H46.274Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M52.0077 15.101H47.2605V0H52.0077V15.101Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M67.5441 3.95792H62.7967V15.101H58.0495V3.95792H53.3024V0H67.4824V3.95792H67.5441Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M73.6476 15.101H68.9621V0H73.7093V15.101H73.6476Z",
                fill: "#181818",
              }),
              a.createElement("path", {
                d: "M30.0245 18.8184H0V23.1417H30.0245V18.8184Z",
                fill: "#00F200",
              })
            ),
            a.createElement(
              "defs",
              null,
              a.createElement(
                "clipPath",
                { id: "clip0" },
                a.createElement("rect", {
                  width: "74",
                  height: "23",
                  fill: "white",
                })
              )
            )
          );
        },
        d = function () {
          return a.createElement(
            "div",
            {
              className:
                "h-60p md:h-120 pl-6 md:pl-20 container-padding flex items-center  ",
            },
            a.createElement(
              r.rU,
              { to: "/" },
              a.createElement(i, { className: "md:hidden" }),
              a.createElement(o, { className: "hidden md:block" })
            )
          );
        },
        u = function (e) {
          var t = e.title,
            l = e.children;
          return a.createElement(
            "div",
            null,
            a.createElement(n.q, null, a.createElement("title", null, t)),
            a.createElement(
              "noscript",
              null,
              a.createElement("iframe", {
                src: "https://www.g.com/ns.html?id=GTM-W6LT4CM",
                height: "0",
                width: "0",
                style: { display: "none", visibility: "hidden" },
              })
            ),
            a.createElement(d, null),
            a.createElement("div", { className: "w-full " }, l),
            a.createElement(m, null),
            a.createElement("script", {
              src: "~/lib/jquery/dist/jquery.min.js",
            }),
            a.createElement("script", {
              src: "~/js/site.js",
              "asp-append-version": "true",
            }),
            a.createElement("script", {
              src: "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.0.0.min.js",
            }),
            a.createElement("script", {
              src: "https://ajax.aspnetcdn.com/ajax/jquery.validate/1.16.0/jquery.validate.min.js",
            }),
            a.createElement("script", {
              src: "https://ajax.aspnetcdn.com/ajax/mvc/5.2.3/jquery.validate.unobtrusive.min.js",
            })
          );
        };
    },
    938: function (e, t, l) {
      l.r(t);
      var a = l(7294),
        n = l(1597),
        r = l(8261);
      t.default = function () {
        return a.createElement(
          r.A,
          { title: "404 - Reviti" },
          a.createElement(
            "div",
            { className: "w-full" },
            a.createElement(
              "div",
              {
                className:
                  "h-screen flex-grow flex flex-col relative items-center",
              },
              a.createElement(
                "div",
                { className: "w-1/4 py-7 top-0" },
                a.createElement(
                  "div",
                  { className: "w-full image-wrapper relative top-0" },
                  a.createElement("img", {
                    src: "/megaphone/megaphone.webp",
                    alt: "Main Header",
                    className: "main-1",
                  }),
                  a.createElement("object", {
                    type: "image/svg+xml",
                    data: "/megaphone/megaphone.svg",
                    className: "couple-animation",
                  }),
                  a.createElement("img", {
                    src: "/megaphone/megaphone-overlay.webp",
                    alt: "Main Header Split",
                    className: "split-1",
                  })
                )
              ),
              a.createElement(
                "h1",
                { className: "font-semibold" },
                "On no! Error 404"
              ),
              a.createElement("span", {
                className: "bg-primarygreen w-20 min-h-4 md:min-h-6 my-4",
              }),
              a.createElement(
                "p",
                { className: "" },
                "The page you are looking for isn't found. We suggest you go back home."
              ),
              a.createElement(
                n.rU,
                { to: "/", className: "my-4" },
                a.createElement(
                  "button",
                  { type: "button", className: "btn-primary" },
                  a.createElement("span", null, "Back to homepage")
                )
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-tsx-185a15b38afdd03d7ca5.js.map
