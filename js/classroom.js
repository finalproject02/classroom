$("#NavMenuBar").click(function () {
  SideMenuOpenClose();
});

$("#ContentOverlayID").click(function () {
  SideMenuOpenClose();
});

function SideMenuOpenClose() {
  let SideNavID = $("#SideNavID");
  let ContentOverlayID = $("#ContentOverlayID");
  let menuText = $(".menuText");
  if (SideNavID.hasClass("sideNavClose")) {
    SideNavID.removeClass("sideNavClose");
    SideNavID.addClass("sideNavOpen");
    menuText.removeClass("d-none");
    ContentOverlayID.removeClass("ContentOverlayClose");
    ContentOverlayID.addClass("ContentOverlay");
  } else {
    SideNavID.removeClass("sideNavOpen");
    SideNavID.addClass("sideNavClose");
    menuText.addClass("d-none");
    ContentOverlayID.removeClass("ContentOverlay");
    ContentOverlayID.addClass("ContentOverlayClose");
  }
}
