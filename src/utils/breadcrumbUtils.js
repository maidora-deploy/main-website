// src/uitls/breadcrumbUtils.js

export const generateBreadcrumbs = (pathname) => {
  const pathParts = pathname.split("/").filter(Boolean);

  let pathArray = [];
  let fullPath = "";

  pathParts.forEach((part) => {
    fullPath += `/${part}`;
    pathArray.push({
      label: decodeURIComponent(part).replace(/-/g, " "),
      path: fullPath,
    });
  });

  return pathArray;
};
