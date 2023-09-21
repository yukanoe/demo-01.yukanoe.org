module.exports = {
  //...
  content: [
    "./template-html/**/*.{html,js}"
  ],

  // add daisyUI plugin
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes:    ["light", "dark", "luxury", "winter"],
    darkTheme: "dark",
    base:   true,
    utils:  true,
    logs:   true,
    rtl:    false,
    prefix: "",
  },

}
