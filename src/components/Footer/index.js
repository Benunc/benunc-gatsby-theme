import React from "react"

const Footer = () => (
  <footer className="site-footer">
    <div className="site-info container center-align medium header-font gray">
      <span class="site-copyright">
        <span
          class="copyright-year  "
          itemscope=""
          itemtype="http://schema.org/copyrightYear"
        >
          © {`${new Date().getFullYear()} `}
        </span>
        <span
          class="copyright-text"
          itemscope=""
          itemtype="http://schema.org/copyrightHolder"
        >
          Tabor Gatsby Theme
        </span>
      </span>
      <span class="site-theme  ">
        <a href="https://gatsbywpthemes.com/">Powered by Gatsby WP Themes</a>
      </span>
    </div>
  </footer>
)

export default Footer
