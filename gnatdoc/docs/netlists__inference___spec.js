GNATdoc.Documentation = {
  "label": "Netlists.Inference",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "Extract_Clock",
          "qualifier": "",
          "line": 26,
          "column": 14,
          "src": "srcs/netlists-inference.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 26,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Extract_Clock",
                      "href": "docs/netlists__inference___spec.html#L26C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 27,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ctxt",
                      "href": "docs/netlists__inference___spec.html#L27C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Context_Acc",
                      "href": "docs/netlists__builders___spec.html#L24C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/netlists__inference___spec.html#L27C27"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Clk",
                      "href": "docs/netlists__inference___spec.html#L27C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Enable",
                      "href": "docs/netlists__inference___spec.html#L27C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Walk the And-net N, and extract clock (posedge/negedge) if found.\n"
                },
                {
                  "kind": "span",
                  "text": "ENABLE is N without the clock.\n"
                },
                {
                  "kind": "span",
                  "text": "If not found, CLK and ENABLE are set to No_Net.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Ctxt",
              "line": 27,
              "column": 7,
              "type": {
                "label": "Netlists.Builders.Context_Acc",
                "docHref": "docs/netlists__builders___spec.html#L24C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 27,
              "column": 27,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "Clk",
              "line": 27,
              "column": 36,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "Enable",
              "line": 27,
              "column": 51,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Infere",
          "qualifier": "",
          "line": 35,
          "column": 13,
          "src": "srcs/netlists-inference.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 35,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Infere",
                      "href": "docs/netlists__inference___spec.html#L35C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ctxt",
                      "href": "docs/netlists__inference___spec.html#L35C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Context_Acc",
                      "href": "docs/netlists__builders___spec.html#L24C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 36,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/netlists__inference___spec.html#L36C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 37,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Off",
                      "href": "docs/netlists__inference___spec.html#L37C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Uns32",
                      "href": "docs/types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 38,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Prev_Val",
                      "href": "docs/netlists__inference___spec.html#L38C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 39,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Loc",
                      "href": "docs/netlists__inference___spec.html#L39C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Location_Type",
                      "href": "docs/types___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 40,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Last_Use",
                      "href": "docs/netlists__inference___spec.html#L40C21"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "To be called when there is an assignment to a signal/output of VAL and\n"
                },
                {
                  "kind": "span",
                  "text": "the previous value is PREV_VAL (an Id_Signal or Id_Output).\n"
                },
                {
                  "kind": "span",
                  "text": "If there is a loop, infere a dff or a latch or emit an error.\n"
                },
                {
                  "kind": "span",
                  "text": "LAST_USE is true iff PREV_VAL won't be reused anywhere else.  So, if\n"
                },
                {
                  "kind": "span",
                  "text": "PREV_VAL is only used in VAL, this is a closed logic that could be\n"
                },
                {
                  "kind": "span",
                  "text": "ignored.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Ctxt",
              "line": 35,
              "column": 21,
              "type": {
                "label": "Netlists.Builders.Context_Acc",
                "docHref": "docs/netlists__builders___spec.html#L24C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 36,
              "column": 21,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "Off",
              "line": 37,
              "column": 21,
              "type": {
                "label": "Types.Uns32",
                "docHref": "docs/types___spec.html#L39C9"
              },
              "description": [
              ]
            },
            {
              "label": "Prev_Val",
              "line": 38,
              "column": 21,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "Loc",
              "line": 39,
              "column": 21,
              "type": {
                "label": "Types.Location_Type",
                "docHref": "docs/types___spec.html#L121C9"
              },
              "description": [
              ]
            },
            {
              "label": "Last_Use",
              "line": 40,
              "column": 21,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Infere_Assert",
          "qualifier": "",
          "line": 43,
          "column": 13,
          "src": "srcs/netlists-inference.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Infere_Assert",
                      "href": "docs/netlists__inference___spec.html#L43C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Ctxt",
                      "href": "docs/netlists__inference___spec.html#L43C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Context_Acc",
                      "href": "docs/netlists__builders___spec.html#L24C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/netlists__inference___spec.html#L44C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "En_Gate",
                      "href": "docs/netlists__inference___spec.html#L45C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Loc",
                      "href": "docs/netlists__inference___spec.html#L46C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Location_Type",
                      "href": "docs/types___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L381C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Called when there is an assignment to a enable gate.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Ctxt",
              "line": 43,
              "column": 28,
              "type": {
                "label": "Netlists.Builders.Context_Acc",
                "docHref": "docs/netlists__builders___spec.html#L24C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 44,
              "column": 28,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "En_Gate",
              "line": 45,
              "column": 28,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L111C9"
              },
              "description": [
              ]
            },
            {
              "label": "Loc",
              "line": 46,
              "column": 28,
              "type": {
                "label": "Types.Location_Type",
                "docHref": "docs/types___spec.html#L121C9"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};