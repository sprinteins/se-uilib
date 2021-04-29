<script>
</script>


<svelte:options tag={'theme-dpdhl'} />

<slot />

<style>
    :host, :root {
        --unit:             16px;
        --border-radius:    4px;
        
        --font-size:            16px;
        --font:                 "DeliveryRegular";
        --font-italic:          "DeliveryItalic"; 
        --font-bold:            "DeliveryBold";
        --font-bold-italic:     "DeliveryBoldItalic";
        --font-black-condensed: "DeliveryBlackCondensed";
        --font-light:           "DeliveryLight";
        --font-light-condensed: "DeliveryLightCondensed";
        --font-light-italic:    "DeliveryLightItalic";

        --color-black:      #000000;
        --color-white:      #ffffff;
        --color-postyellow: #FFCC00;
        --color-dhlred:     #D40511;
        --color-gray80:     #333333;
        --color-gray60:     #666666;
        --color-gray45:     #8c8c8c;
        --color-gray30:     #b2b2b2;
        --color-gray20:     #cccccc;
        --color-gray10:     #e5e5e5;
        --color-gray08:     #ebebeb;
        --color-gray05:     #f2f2f2;
        
        --color-primary:   var(--color-dhlred);
        --color-secondary: var(--color-white);
    }

    :host *, 
    :root * {
        font-family: var(--font);
        font-size:   var(--font-size);
    }


    @font-face {
        font-family: "DeliveryRegular";
        src: url("../fonts/delivery/Delivery_W_Rg.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBold";
        src: url("../fonts/delivery/Delivery_W_Bd.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBoldItalic";
        src: url("../fonts/delivery/Delivery_W_BdIt.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryBlackCondensed";
        src: url("../fonts/delivery/Delivery_W_CdBlk.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: 'DeliveryLightCondensed';
        src: url('../fonts/delivery/Delivery_W_CdLt.woff2') format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryItalic";
        src: url("../fonts/delivery/Delivery_W_It.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryLight";
        src: url("../fonts/delivery/Delivery_W_Lt.woff2") format("woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "DeliveryLightItalic";
        src: url("../fonts/delivery/Delivery_W_LtIt.woff2") format("woff2");
        font-display: swap;
    }
</style>
