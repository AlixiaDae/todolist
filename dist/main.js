(()=>{"use strict";const t=class{constructor(t,e,o=""){this.title=t,this.description=e,this.date=o}getTitle(){return this.title}setTitle(t){return this.title=t}getDescription(){return this.description}setDescription(t){return this.description=t}getDate(){if(""==this.date){let t=new Date;return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}return this.date}setDate(t){return this.date=t}},e=class{constructor(t){this.name=t,this.todos=[]}getName(){return this.name}setName(t){return this.name=t}getTodos(){return this.todos}getTodo(t){return this.todos.find((e=>e.title===t.title))}addTodo(t){this.todos.find((e=>e.title===t.title))||this.todos.push(t)}deleteTodo(t){return this.todos=this.todos.filter((e=>e.title!==t))}};let o=new t("Todo 1","new test for todo box 1"),s=new t("Todo 2","new test for todo box 2"),d=new t("Todo 3","new test for todo box 3"),i=new t("Todo 5","new test for date sorting","12/2/2025");const n=new class{constructor(){this.projects=[],this.projects.push(new e("Today")),this.projects.push(new e("This Week")),this.projects.push(new e("This Month"))}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.name===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}sortTodos(){let t=this.getProject("Today"),e=new Date,o=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear(),s=this.getProject("This Week");this.getProject("This Month").getTodos();for(let e=0;e<s.getTodos().length;e++){let d=s.getTodos()[e];d.getDate()===o&&(t.addTodo(d),s.deleteTodo(d.title))}}},c=n.getProject("Today"),r=n.getProject("This Week");c.addTodo(o),c.addTodo(s),c.addTodo(d),r.addTodo(i),n.sortTodos();const a=document.querySelector(".main-board");function l(t){const e=document.createElement("div");e.classList.add("project-box");const o=document.createElement("p");o.classList.add("project-header"),o.textContent=t.name;const s=t.getTodos();if(e.appendChild(o),0!=s.length){const t=document.createElement("div");t.classList.add("todo-box"),t.classList.add("visible");for(let e=0;e<s.length;e++){let o=h(s[e]);o.style.backgroundColor=e%2==1?"#e4e4e4":"white",t.appendChild(o)}e.appendChild(t),e.addEventListener("click",(e=>{t.classList.contains("visible")?t.classList.remove("visible"):t.classList.add("visible")}))}return e}function h(t){const e=document.createElement("div");e.classList.add("todo");const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("checked-id","checkbox");const s=document.createElement("p");s.classList.add("todo-title"),s.textContent=t.title;const d=document.createElement("p");d.classList.add("todo-date"),d.textContent=t.getDate();const i=document.createElement("div");i.classList.add("check-title-date"),i.append(o,s,d);const n=document.createElement("p");return n.classList.add("todo-description"),n.textContent=t.description,e.addEventListener("click",(t=>{t.target!=s&&(n.classList.contains("visible")?n.classList.remove("visible"):n.classList.add("visible"))})),s.addEventListener("click",(()=>{s.contentEditable=!0})),e.append(i,n),e}!function(){let t=["#FAEDCB","#C9E4DE","#C6DEF1","#D8CDF0","#F2C6DE","#F7D9C4"];for(let e=0;e<n.getProjects().length;e++){let o=l(n.getProjects()[e]),s=Math.floor(5*Math.random()),d=t[s];o.childNodes[0].style.backgroundColor=d,t.splice(s,1),a.appendChild(o)}}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCxFQUNuQixDQUNGLENBRUFrQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL1RvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSA9IFwiXCIpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIHJldHVybiAodGhpcy50aXRsZSA9IG5ld1RpdGxlKTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgcmV0dXJuICh0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmRhdGUgPT0gXCJcIikge1xyXG4gICAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGxldCBkYXkgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgICAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICBsZXQgdG9kYXkgPSBkYXkgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyB5ZWFyO1xyXG5cclxuICAgICAgcmV0dXJuIHRvZGF5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGUobmV3RGF0ZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLmRhdGUgPSBuZXdEYXRlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG87XHJcbiIsImNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmV3TmFtZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLm5hbWUgPSBuZXdOYW1lKTtcclxuICB9XHJcblxyXG4gIGdldFRvZG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKGNob3NlblRvZG9PYmplY3QpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8udGl0bGUgPT09IGNob3NlblRvZG9PYmplY3QudGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvT2JqZWN0KSB7XHJcbiAgICBpZiAodGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLnRpdGxlID09PSB0b2RvT2JqZWN0LnRpdGxlKSkgcmV0dXJuO1xyXG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG9PYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kbyh0b2RvVGl0bGVUb0JlRGVsZXRlZCkge1xyXG4gICAgcmV0dXJuICh0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoXHJcbiAgICAgICh0b2RvKSA9PiB0b2RvLnRpdGxlICE9PSB0b2RvVGl0bGVUb0JlRGVsZXRlZFxyXG4gICAgKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XHJcblxyXG4vLyBURVNUXHJcbmxldCB0ZXN0VG9kbyA9IG5ldyBUb2RvKFwiVG9kbyAxXCIsIFwibmV3IHRlc3QgZm9yIHRvZG8gYm94IDFcIik7XHJcbmxldCB0ZXN0VG9kbzIgPSBuZXcgVG9kbyhcIlRvZG8gMlwiLCBcIm5ldyB0ZXN0IGZvciB0b2RvIGJveCAyXCIpO1xyXG5sZXQgdGVzdFRvZG8zID0gbmV3IFRvZG8oXCJUb2RvIDNcIiwgXCJuZXcgdGVzdCBmb3IgdG9kbyBib3ggM1wiKTtcclxubGV0IGRhdGVTb3J0VGVzdCA9IG5ldyBUb2RvKFwiVG9kbyA1XCIsIFwibmV3IHRlc3QgZm9yIGRhdGUgc29ydGluZ1wiLCBcIjEyLzIvMjAyNVwiKTtcclxuXHJcblxyXG4vL1xyXG5cclxuY29uc3QgYWxsVG9kb3MgPSBuZXcgVG9kb3MoKTtcclxuXHJcbmNvbnN0IHRvZGF5VG9kb3MgPSBhbGxUb2Rvcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbmNvbnN0IHdlZWtUb2RvcyA9IGFsbFRvZG9zLmdldFByb2plY3QoXCJUaGlzIFdlZWtcIik7XHJcblxyXG50b2RheVRvZG9zLmFkZFRvZG8odGVzdFRvZG8pO1xyXG50b2RheVRvZG9zLmFkZFRvZG8odGVzdFRvZG8yKTtcclxudG9kYXlUb2Rvcy5hZGRUb2RvKHRlc3RUb2RvMyk7XHJcblxyXG53ZWVrVG9kb3MuYWRkVG9kbyhkYXRlU29ydFRlc3QpXHJcblxyXG5hbGxUb2Rvcy5zb3J0VG9kb3MoKVxyXG5cclxuXHJcbi8vIERPTSBFTEVNRU5UU1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJvYXJkXCIpO1xyXG5cclxuLy8gRE9NIExvYWRlcnNcclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcclxuICAvLyB0byBlbnN1cmUgbm8gY29sb3IgcmVwZWF0c1xyXG4gIGxldCBjb2xvckFycmF5ID0gW1xyXG4gICAgXCIjRkFFRENCXCIsXHJcbiAgICBcIiNDOUU0REVcIixcclxuICAgIFwiI0M2REVGMVwiLFxyXG4gICAgXCIjRDhDREYwXCIsXHJcbiAgICBcIiNGMkM2REVcIixcclxuICAgIFwiI0Y3RDlDNFwiLFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVG9kb3MuZ2V0UHJvamVjdHMoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxUb2Rvcy5nZXRQcm9qZWN0cygpW2ldO1xyXG5cclxuICAgIGxldCBwcm9qZWN0Qm94ID0gY3JlYXRlUHJvamVjdEJveChwcm9qZWN0KTtcclxuXHJcbiAgICAvLyBDb2xvciBlYWNoIHByb2plY3QgaGVhZGVyIGRpZmZlcmVudGx5XHJcblxyXG4gICAgbGV0IGJnQ29sb3JJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xyXG4gICAgbGV0IGJnQ29sb3IgPSBjb2xvckFycmF5W2JnQ29sb3JJbmRleF07XHJcbiAgICBsZXQgcHJvamVjdEhlYWRlciA9IHByb2plY3RCb3guY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICBwcm9qZWN0SGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnQ29sb3I7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGNvbG9yIGZyb20gYXJyYXkgc28gaXQgY2FuJ3QgYmUgcGlja2VkIGFnYWluXHJcbiAgICBjb2xvckFycmF5LnNwbGljZShiZ0NvbG9ySW5kZXgsIDEpO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEJveCk7XHJcbiAgfVxyXG59XHJcblxyXG5zaG93UHJvamVjdHMoKTtcclxuXHJcbi8vIERPTSBDcmVhdGlvbiBGdW5jdGlvbnNcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RCb3gocHJvamVjdE9iamVjdCkge1xyXG4gIGNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChcInByb2plY3QtYm94XCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XHJcbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QubmFtZTtcclxuXHJcbiAgY29uc3QgcHJvamVjdFRvZG9zID0gcHJvamVjdE9iamVjdC5nZXRUb2RvcygpO1xyXG5cclxuICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xyXG5cclxuICBpZiAocHJvamVjdFRvZG9zLmxlbmd0aCAhPSAwKSB7XHJcbiAgICBjb25zdCB0b2RvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZG9Cb3guY2xhc3NMaXN0LmFkZChcInRvZG8tYm94XCIpO1xyXG4gICAgdG9kb0JveC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUb2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdG9kbyA9IHByb2plY3RUb2Rvc1tpXTtcclxuICAgICAgbGV0IHRvZG9FbCA9IGNyZWF0ZVRvZG9Cb3godG9kbyk7XHJcblxyXG4gICAgICBpZiAoaSAlIDIgPT0gMSkge1xyXG4gICAgICAgIHRvZG9FbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlNGU0ZTRcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RvRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0b2RvQm94LmFwcGVuZENoaWxkKHRvZG9FbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZCh0b2RvQm94KTtcclxuXHJcbiAgICAvLyBMaXN0ZW5lcnNcclxuXHJcbiAgICBwcm9qZWN0Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAodG9kb0JveC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgdG9kb0JveC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RvQm94LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwcm9qZWN0Qm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQm94KHRvZG9PYmplY3QpIHtcclxuICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xyXG5cclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZC1pZFwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XHJcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb09iamVjdC50aXRsZTtcclxuXHJcbiAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xyXG4gIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kb09iamVjdC5nZXREYXRlKCk7XHJcblxyXG4gIGNvbnN0IGNoZWNrVGl0bGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaGVja1RpdGxlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiY2hlY2stdGl0bGUtZGF0ZVwiKTtcclxuXHJcbiAgY2hlY2tUaXRsZURhdGUuYXBwZW5kKGNoZWNrQm94LCB0b2RvVGl0bGUsIHRvZG9EYXRlKTtcclxuXHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9PYmplY3QuZGVzY3JpcHRpb247XHJcblxyXG4gIC8vIExpc3RlbmVyc1xyXG5cclxuICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0ICE9IHRvZG9UaXRsZSkge1xyXG4gICAgICBpZiAodG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInZpc2libGVcIikpIHtcclxuICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG9kb1RpdGxlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIHRvZG8uYXBwZW5kKGNoZWNrVGl0bGVEYXRlLCB0b2RvRGVzY3JpcHRpb24pO1xyXG5cclxuICByZXR1cm4gdG9kbztcclxufVxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5jbGFzcyBUb2RvcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIFdlZWtcIikpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiVGhpcyBNb250aFwiKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5uYW1lID09PSBwcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3RPYmplY3QpIHtcclxuICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2opID0+IHByb2oubmFtZSA9PT0gbmV3UHJvamVjdE9iamVjdC5uYW1lKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3RPYmplY3QpO1xyXG4gIH1cclxuXHJcbiAgc29ydFRvZG9zKCkge1xyXG4gICAgbGV0IHRvZGF5UHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICBsZXQgdG9kYXkgPSBkYXRlICsgXCIvXCIgKyBtb250aCArIFwiL1wiICsgeWVhcjtcclxuXHJcbiAgICBsZXQgd2Vla1Byb2plY3QgPSB0aGlzLmdldFByb2plY3QoXCJUaGlzIFdlZWtcIik7XHJcbiAgICBsZXQgbW9udGhQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KFwiVGhpcyBNb250aFwiKS5nZXRUb2RvcygpO1xyXG5cclxuICAgIC8vIGZvciB3ZWVrIHRvZG9zIHdpdGggZHVlIGRhdGUgb2YgdG9kYXlcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla1Byb2plY3QuZ2V0VG9kb3MoKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdG9kbyA9IHdlZWtQcm9qZWN0LmdldFRvZG9zKClbaV07XHJcbiAgICAgIGlmICh0b2RvLmdldERhdGUoKSA9PT0gdG9kYXkpIHtcclxuICAgICAgICB0b2RheVByb2plY3QuYWRkVG9kbyh0b2RvKTtcclxuICAgICAgICB3ZWVrUHJvamVjdC5kZWxldGVUb2RvKHRvZG8udGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvcztcclxuIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJ0aGlzIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZ2V0RGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInNldERhdGUiLCJuYW1lIiwidG9kb3MiLCJnZXROYW1lIiwic2V0TmFtZSIsIm5ld05hbWUiLCJnZXRUb2RvcyIsImdldFRvZG8iLCJjaG9zZW5Ub2RvT2JqZWN0IiwiZmluZCIsInRvZG8iLCJhZGRUb2RvIiwidG9kb09iamVjdCIsInB1c2giLCJkZWxldGVUb2RvIiwidG9kb1RpdGxlVG9CZURlbGV0ZWQiLCJmaWx0ZXIiLCJ0ZXN0VG9kbyIsInRlc3RUb2RvMiIsInRlc3RUb2RvMyIsImRhdGVTb3J0VGVzdCIsImFsbFRvZG9zIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImdldFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2oiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdE9iamVjdCIsInNvcnRUb2RvcyIsInRvZGF5UHJvamVjdCIsInRvZGF5Iiwid2Vla1Byb2plY3QiLCJpIiwibGVuZ3RoIiwidG9kYXlUb2RvcyIsIndlZWtUb2RvcyIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVQcm9qZWN0Qm94IiwicHJvamVjdE9iamVjdCIsInByb2plY3RCb3giLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdEhlYWRlciIsInRleHRDb250ZW50IiwicHJvamVjdFRvZG9zIiwiYXBwZW5kQ2hpbGQiLCJ0b2RvQm94IiwidG9kb0VsIiwiY3JlYXRlVG9kb0JveCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb250YWlucyIsInJlbW92ZSIsImNoZWNrQm94Iiwic2V0QXR0cmlidXRlIiwidG9kb1RpdGxlIiwidG9kb0RhdGUiLCJjaGVja1RpdGxlRGF0ZSIsImFwcGVuZCIsInRvZG9EZXNjcmlwdGlvbiIsInRhcmdldCIsImNvbnRlbnRFZGl0YWJsZSIsImNvbG9yQXJyYXkiLCJiZ0NvbG9ySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJiZ0NvbG9yIiwiY2hpbGROb2RlcyIsInNwbGljZSIsInNob3dQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=