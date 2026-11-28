(function () {
  'use strict';

  // App destinations are maintained separately from membership facts and usage.
  // Each destination comes from an official link or a documented navigation route.
  /* APP_LINK_CATALOG_BEGIN */
  const entries = {
  "jd": {
    "appName": "京东",
    "schemes": [
      "openapp.jdmobile:"
    ],
    "httpsHosts": [
      "linkst.m.jd.com",
      "wqs.jd.com"
    ],
    "androidPackage": "com.jingdong.app.mall",
    "member": {
      "ios": {
        "url": "https://linkst.m.jd.com/ul/ul.action?openApp.jdMobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22m%22%2C%22url%22%3A%22https%253A%252F%252Fplus.m.jd.com%252F%22%7D",
        "kind": "member",
        "label": "打开PLUS会员页"
      },
      "android": {
        "url": "openApp.jdMobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22m%22%2C%22url%22%3A%22https%253A%252F%252Fplus.m.jd.com%252F%22%7D",
        "kind": "member",
        "label": "打开PLUS会员页"
      }
    },
    "home": {
      "ios": {
        "url": "openApp.jdMobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22HomePage%22%7D",
        "kind": "home"
      },
      "android": {
        "url": "openApp.jdMobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22des%22%3A%22HomePage%22%7D",
        "kind": "home"
      },
      "harmony": {
        "url": "https://wqs.jd.com/downloadApp/openApp.html",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "京东 App → 我的 → PLUS会员。具体权益在PLUS页内查找。",
    "help": {
      "harmony": "先进入京东官方打开页，再选择打开App；鸿蒙版目标页面支持以App实际显示为准。"
    }
  },
  "taobao": {
    "appName": "淘宝",
    "schemes": [
      "tbopen:"
    ],
    "httpsHosts": [
      "b.mashort.cn",
      "h5.m.taobao.com"
    ],
    "androidPackage": "com.taobao.taobao",
    "home": {
      "ios": {
        "url": "tbopen://m.taobao.com/tbopen/index.html?action=ali.open.nav&module=h5&bootImage=0&h5Url=https%3A%2F%2Fm.taobao.com%2F",
        "kind": "home"
      },
      "android": {
        "url": "tbopen://m.taobao.com/tbopen/index.html?action=ali.open.nav&module=h5&bootImage=0&h5Url=https%3A%2F%2Fm.taobao.com%2F",
        "kind": "home"
      },
      "harmony": {
        "url": "https://h5.m.taobao.com/bcec/downloadTaobao.html",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "淘宝 App → 我的淘宝 → 88VIP／会员中心。官方网页按钮为88VIP权益规则，不能办理领取。",
    "help": {
      "harmony": "先打开淘宝官方引导页；鸿蒙版是否能接收跳转，以App实际支持为准。"
    }
  },
  "jd-finance": {
    "appName": "京东金融",
    "schemes": [
      "jdmobile:"
    ],
    "httpsHosts": [
      "m.jr.jd.com"
    ],
    "androidPackage": "com.jd.jrapp",
    "home": {
      "ios": {
        "url": "jdmobile://",
        "kind": "home"
      },
      "android": {
        "url": "jdmobile://",
        "kind": "home"
      },
      "harmony": {
        "url": "https://m.jr.jd.com/helppage/downApp/",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "京东金融 App → 我的 → 会员／会员权益，查看当前等级。",
    "help": {
      "harmony": "京东金融鸿蒙版的直接打开方式尚未确认，可使用官方引导页或官方网页。"
    }
  },
  "meituan": {
    "appName": "美团",
    "schemes": [
      "imeituan:"
    ],
    "httpsHosts": [
      "www.meituan.com"
    ],
    "androidPackage": "com.sankuai.meituan",
    "home": {
      "ios": {
        "url": "imeituan://www.meituan.com/home",
        "kind": "home"
      },
      "android": {
        "url": "imeituan://www.meituan.com/home",
        "kind": "home"
      },
      "harmony": {
        "url": "https://www.meituan.com/mobile/download/meituan",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "美团 App → 我的 → 美团会员，查看当前等级和对应权益。",
    "help": {
      "harmony": "先进入官方引导页；鸿蒙版是否能接收跳转，以App实际支持为准。"
    }
  },
  "alipay": {
    "appName": "支付宝",
    "schemes": [
      "alipays:"
    ],
    "httpsHosts": [
      "ds.alipay.com"
    ],
    "androidPackage": "com.eg.android.AlipayGphone",
    "home": {
      "ios": {
        "url": "alipays://platformapi/startapp?appId=20000001",
        "kind": "home"
      },
      "android": {
        "url": "alipays://platformapi/startapp?appId=20000001",
        "kind": "home"
      },
      "harmony": {
        "url": "https://ds.alipay.com/",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "支付宝 App → 我的 → 支付宝会员 → 等级特权，查看当前等级权益。",
    "help": {
      "harmony": "先进入官方引导页；鸿蒙版是否能接收跳转，以App实际支持为准。"
    }
  },
  "dianping": {
    "appName": "大众点评",
    "schemes": [
      "dianping:"
    ],
    "httpsHosts": [
      "m.dianping.com"
    ],
    "androidPackage": "com.dianping.v1",
    "home": {
      "ios": {
        "url": "dianping://home",
        "kind": "home"
      },
      "android": {
        "url": "dianping://home",
        "kind": "home"
      },
      "harmony": {
        "url": "https://m.dianping.com/",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "大众点评 App → 我的 → 会员等级；V等级与橙V／VIP资格分别查看。",
    "help": {
      "harmony": "先进入官方引导页；鸿蒙版是否能接收跳转，以App实际支持为准。"
    }
  },
  "mobile": {
    "appName": "中国移动",
    "schemes": [],
    "httpsHosts": [
      "h.app.coc.10086.cn",
      "touch.10086.cn"
    ],
    "home": {
      "common": {
        "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html",
        "kind": "handoff"
      }
    },
    "guide": "中国移动 App → 我的 → 全球通·金卡专享；也可以在App内搜索“全球通”。",
    "benefits": {
      "hotel-discount": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fqqt.cmicrwx.cn%2F2016tyjf%2Fqqtxly%2Fres%2Fwap%2Findex.html%3FsspId%3D66033%26isReplace%3D1%23%2Fhome%2Fhotel",
            "kind": "benefit",
            "label": "打开酒店权益页"
          }
        },
        "web": "https://qqt.cmicrwx.cn/2016tyjf/qqtxly/res/wap/index.html?sspId=66033&isReplace=1#/home/hotel",
        "guide": "中国移动 App → 全球通·金卡专享 → 酒店权益，核对适用酒店、房型和具体服务。"
      },
      "hotel-coupon": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fqqt.cmicrwx.cn%2F2016tyjf%2Fqqtxly%2Fres%2Fwap%2Findex.html%3FsspId%3D66033%26isReplace%3D1%23%2Fhome%2Fhotel",
            "kind": "benefit",
            "label": "打开酒店权益页"
          }
        },
        "web": "https://qqt.cmicrwx.cn/2016tyjf/qqtxly/res/wap/index.html?sspId=66033&isReplace=1#/home/hotel",
        "guide": "中国移动 App → 全球通·金卡专享 → 酒店权益，核对适用酒店、房型和具体服务。"
      },
      "hotel-breakfast": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fqqt.cmicrwx.cn%2F2016tyjf%2Fqqtxly%2Fres%2Fwap%2Findex.html%3FsspId%3D66033%26isReplace%3D1%23%2Fhome%2Fhotel",
            "kind": "benefit",
            "label": "打开酒店权益页"
          }
        },
        "web": "https://qqt.cmicrwx.cn/2016tyjf/qqtxly/res/wap/index.html?sspId=66033&isReplace=1#/home/hotel",
        "guide": "中国移动 App → 全球通·金卡专享 → 酒店权益，核对适用酒店、房型和具体服务。"
      },
      "hotel-late-checkout": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fqqt.cmicrwx.cn%2F2016tyjf%2Fqqtxly%2Fres%2Fwap%2Findex.html%3FsspId%3D66033%26isReplace%3D1%23%2Fhome%2Fhotel",
            "kind": "benefit",
            "label": "打开酒店权益页"
          }
        },
        "web": "https://qqt.cmicrwx.cn/2016tyjf/qqtxly/res/wap/index.html?sspId=66033&isReplace=1#/home/hotel",
        "guide": "中国移动 App → 全球通·金卡专享 → 酒店权益，核对适用酒店、房型和具体服务。"
      },
      "hotel-upgrade": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fqqt.cmicrwx.cn%2F2016tyjf%2Fqqtxly%2Fres%2Fwap%2Findex.html%3FsspId%3D66033%26isReplace%3D1%23%2Fhome%2Fhotel",
            "kind": "benefit",
            "label": "打开酒店权益页"
          }
        },
        "web": "https://qqt.cmicrwx.cn/2016tyjf/qqtxly/res/wap/index.html?sspId=66033&isReplace=1#/home/hotel",
        "guide": "中国移动 App → 全球通·金卡专享 → 酒店权益，核对适用酒店、房型和具体服务。"
      },
      "roaming-5gb": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fwww.10086.cn%2Froaming%2Fyewu%2Fqqtzs%2F",
            "kind": "benefit",
            "label": "打开国漫权益页"
          }
        },
        "web": "https://www.10086.cn/roaming/yewu/qqtzs/",
        "guide": "中国移动 App → 全球通·金卡专享 → 国漫权益；领取、转赠与激活按本人账号规则操作。"
      },
      "roaming-gift": {
        "route": {
          "common": {
            "url": "https://h.app.coc.10086.cn/activity/transit/transferDownload.html?targetUrl=https%3A%2F%2Fwww.10086.cn%2Froaming%2Fyewu%2Fqqtzs%2F",
            "kind": "benefit",
            "label": "打开国漫权益页"
          }
        },
        "web": "https://www.10086.cn/roaming/yewu/qqtzs/",
        "guide": "中国移动 App → 全球通·金卡专享 → 国漫权益；领取、转赠与激活按本人账号规则操作。"
      },
      "airport-lounge": {
        "guide": "中国移动 App → 全球通·金卡专享，查找机场／高铁贵宾休息室。全国、广东及合作入口分别核对。"
      },
      "railway-lounge": {
        "guide": "中国移动 App → 全球通·金卡专享，查找机场／高铁贵宾休息室。全国、广东及合作入口分别核对。"
      },
      "hongkong-lounge": {
        "guide": "中国移动 App → 全球通·金卡专享，查找机场／高铁贵宾休息室。全国、广东及合作入口分别核对。"
      },
      "ctrip-railway-lounge": {
        "guide": "中国移动 App → 全球通·金卡专享，查找机场／高铁贵宾休息室。全国、广东及合作入口分别核对。"
      },
      "lounge-member-purchase": {
        "guide": "中国移动 App → 全球通·金卡专享，查找机场／高铁贵宾休息室。全国、广东及合作入口分别核对。"
      },
      "star-day-benefit-choice": {
        "guide": "中国移动 App → 全球通·金卡专享 → 星动日。具体领取、签到或任务需本人在活动页确认。"
      },
      "star-day-sign-in": {
        "guide": "中国移动 App → 全球通·金卡专享 → 星动日。具体领取、签到或任务需本人在活动页确认。"
      },
      "star-day-blind-box": {
        "guide": "中国移动 App → 全球通·金卡专享 → 星动日。具体领取、签到或任务需本人在活动页确认。"
      }
    }
  },
  "ctrip": {
    "appName": "携程旅行",
    "schemes": [
      "ctrip:"
    ],
    "httpsHosts": [
      "m.ctrip.com"
    ],
    "androidPackage": "ctrip.android.view",
    "home": {
      "ios": {
        "url": "ctrip://wireless",
        "kind": "home"
      },
      "android": {
        "url": "ctrip://wireless",
        "kind": "home"
      },
      "harmony": {
        "url": "https://m.ctrip.com/html5/mkt/centerpage/download/",
        "kind": "handoff",
        "label": "官方App入口"
      }
    },
    "guide": "携程旅行 App → 我的 → 会员中心／钻石会员。",
    "help": {
      "harmony": "先进入携程官方引导页；原生鸿蒙版能否接收此处跳转，以App实际支持为准。"
    }
  },
  "marriott": {
    "appName": "万豪旅享家",
    "schemes": [],
    "httpsHosts": [
      "app.marriott.com",
      "marriott.app.link"
    ],
    "home": {
      "ios": {
        "url": "https://app.marriott.com/VsUQqWPxjFb",
        "kind": "home"
      },
      "android": {
        "url": "https://app.marriott.com/VsUQqWPxjFb",
        "kind": "home"
      }
    },
    "guide": "万豪旅享家 App → 账户 → 您的级别 → 尊贵金卡，查看酒店、航空和租车礼遇。",
    "help": {
      "harmony": "万豪App在原生鸿蒙上的打开方式尚未确认，可使用官方网页；已安装时也可按路径查看。"
    }
  },
  "costco": {
    "appName": "Costco 美国",
    "schemes": [],
    "httpsHosts": [
      "www.costco.com"
    ],
    "androidPackage": "com.costco.app.android",
    "home": {
      "ios": {
        "url": "https://www.costco.com/",
        "kind": "home"
      },
      "android": {
        "url": "https://www.costco.com/",
        "kind": "home"
      }
    },
    "guide": "美国 Costco App → Account，查看自己的Gold Star会员卡和会员服务。",
    "help": {
      "ios": "Costco官网与App使用同一地址，手机可能按系统偏好打开App或网页；电子卡仍需在App内查看。",
      "android": "Costco官网与App使用同一地址，手机可能按系统偏好打开App或网页；电子卡仍需在App内查看。",
      "harmony": "美国Costco App在原生鸿蒙上的打开方式尚未确认，可使用官方网页。"
    }
  }
};
  /* APP_LINK_CATALOG_END */

  const platforms = ['ios', 'android', 'harmony'];
  const neverOpen = new Set(['javascript:', 'data:', 'file:', 'vbscript:', 'about:', 'http:']);

  function webURL(value) {
    if (typeof value !== 'string' || /[\u0000-\u0020\u007f]/.test(value)) return '';
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
    } catch (_) { return ''; }
  }

  function device(userAgent, touchPoints) {
    const ua = typeof userAgent === 'string' ? userAgent : (navigator.userAgent || '');
    const touches = touchPoints === undefined ? (navigator.maxTouchPoints || 0) : touchPoints;
    if (/HarmonyOS|OpenHarmony/i.test(ua)) return 'harmony';
    if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && touches > 1)) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    return 'desktop';
  }

  function appURL(value, entry, platform) {
    if (typeof value !== 'string' || /[\u0000-\u0020\u007f]/.test(value)) return '';
    let url;
    try { url = new URL(value); } catch (_) { return ''; }
    if (neverOpen.has(url.protocol) || url.username || url.password) return '';
    if (url.protocol === 'https:') {
      return (entry.httpsHosts || []).includes(url.hostname) ? url.href : '';
    }
    if (url.protocol === 'intent:') {
      if (platform !== 'android' || !entry.androidPackage) return '';
      const parts = value.split('#Intent;');
      if (parts.length !== 2 || !parts[1].endsWith(';end')) return '';
      const fields = Object.create(null);
      const allowed = new Set(['scheme', 'package', 'action', 'category', 'S.browser_fallback_url']);
      for (const part of parts[1].slice(0, -4).split(';')) {
        const split = part.indexOf('=');
        if (split < 1) return '';
        const name = part.slice(0, split), content = part.slice(split + 1);
        if (!allowed.has(name) || Object.prototype.hasOwnProperty.call(fields, name) || !content) return '';
        fields[name] = content;
      }
      if (fields.package !== entry.androidPackage || !(entry.schemes || []).includes(fields.scheme + ':')) return '';
      if (fields.action && fields.action !== 'android.intent.action.VIEW') return '';
      if (fields.category && fields.category !== 'android.intent.category.BROWSABLE') return '';
      if (fields['S.browser_fallback_url']) {
        let fallback;
        try { fallback = decodeURIComponent(fields['S.browser_fallback_url']); } catch (_) { return ''; }
        if (!webURL(fallback)) return '';
      }
      return value;
    }
    return (entry.schemes || []).includes(url.protocol) ? value : '';
  }

  function pick(route, entry, platform) {
    if (!route) return null;
    const candidate = route[platform] || route.common;
    if (!candidate || typeof candidate !== 'object') return null;
    const url = appURL(candidate.url, entry, platform);
    return url ? { ...candidate, url } : null;
  }

  function resolve(member, benefit, options) {
    const settings = options || {};
    const entry = entries[member.slug];
    const platform = platforms.includes(settings.device) ? settings.device : device();
    const defaultWeb = webURL(settings.web) || webURL(member.officialUrl);
    if (!entry) return { platform, web: defaultWeb, appName: member.name, primary: null, home: null, guide: '' };
    const routePlatform = platform === 'desktop' ? 'ios' : platform;
    const exact = benefit && entry.benefits && entry.benefits[benefit.id];
    const web = exact && webURL(exact.web) || defaultWeb;
    const primary = pick(exact && exact.route, entry, routePlatform) ||
      pick(entry.member, entry, routePlatform) || pick(entry.home, entry, routePlatform);
    const home = pick(entry.home, entry, routePlatform);
    const guide = (exact && exact.guide) || entry.guide || '';
    return {
      platform, web, appName: entry.appName, guide, primary,
      home: home && (!primary || home.url !== primary.url) ? home : null,
      exact: Boolean(exact && pick(exact.route, entry, routePlatform)),
      help: entry.help && entry.help[platform] || ''
    };
  }

  window.PERKS_APP_LINKS = entries;
  window.PerksLinks = Object.freeze({ webURL, device, appURL, resolve });
})();
