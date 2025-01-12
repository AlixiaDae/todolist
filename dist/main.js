(()=>{"use strict";const t=class{constructor(t,e,o=""){this.title=t,this.description=e,this.dueDate=o}getTitle(){return this.title}setTitle(t){return this.title=t}getDescription(){return this.description}setDescription(t){return this.description=t}getDueDate(){if(""==this.dueDate){let t=new Date;return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}return this.dueDate}setDate(t){return this.dueDate=t}},e=class{constructor(t){this.name=t,this.todos=[]}getName(){return this.name}setName(t){return this.name=t}getTodos(){return this.todos}getTodo(t){return this.todos.find((e=>e.title===t.title))}addTodo(t){this.todos.find((e=>e.title===t.title))||this.todos.push(t)}deleteTodo(t){return this.todos=this.todos.filter((e=>e.title!==t))}};function o(t,e){return new Date(e,t,0).getDate()}let s=new t("Todo 1","new test for todo box 1"),n=new t("Todo 2","new test for todo box 2"),d=new t("Todo 3","new test for todo box 3"),i=new t("Todo 5","new test for date sorting","15/1/2025"),r=new t("Month test","testing month sort","26/1/2025");const c=new class{constructor(){this.projects=[],this.projects.push(new e("Today")),this.projects.push(new e("This Week")),this.projects.push(new e("This Month"))}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.name===t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}sortTodos(){let t=this.getProject("Today"),e=new Date,s=e.getDate(),n=e.getMonth()+1,d=e.getFullYear(),i=s+"/"+n+"/"+d,r=this.getProject("This Month"),c=this.getProject("This Week");for(let t=0;t<r.getTodos().length;t++){let e=r.getTodos()[t],i=e.getDueDate().split("/"),a=Number(i[0]),l=Number(i[1]),h=Number(i[2]),u=s+6,p=n,g=d;u>o(n,d)&&(u=1,p+=1,13===p&&(p=1,g+=1));let m=new Date,T=new Date(g,p-1,u),D=new Date(h,l-1,a);D>=m&&D<=T&&(c.addTodo(e),r.deleteTodo(e.title))}for(let e=0;e<c.getTodos().length;e++){let o=c.getTodos()[e];o.getDueDate()===i&&(t.addTodo(o),c.deleteTodo(o.title))}}},a=c.getProject("Today"),l=c.getProject("This Week"),h=c.getProject("This Month");a.addTodo(s),a.addTodo(n),a.addTodo(d),l.addTodo(i),h.addTodo(r),c.sortTodos();const u=document.querySelector(".main-board");function p(t){const e=document.createElement("div");e.classList.add("project-box");const o=document.createElement("p");o.classList.add("project-header"),o.textContent=t.name;const s=t.getTodos();if(e.appendChild(o),0!=s.length){const t=document.createElement("div");t.classList.add("todo-box"),t.classList.add("visible");for(let e=0;e<s.length;e++){let o=g(s[e]);o.style.backgroundColor=e%2==1?"#e4e4e4":"white",t.appendChild(o)}e.appendChild(t),e.addEventListener("click",(e=>{t.classList.contains("visible")?t.classList.remove("visible"):t.classList.add("visible")}))}return e}function g(t){const e=document.createElement("div");e.classList.add("todo");const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("checked-id","checkbox");const s=document.createElement("p");s.classList.add("todo-title"),s.textContent=t.title;const n=document.createElement("p");n.classList.add("todo-date"),n.textContent=t.getDueDate();const d=document.createElement("div");d.classList.add("check-title-date"),d.append(o,s,n);const i=document.createElement("p");return i.classList.add("todo-description"),i.textContent=t.description,e.addEventListener("click",(t=>{t.target!=s&&(i.classList.contains("visible")?i.classList.remove("visible"):i.classList.add("visible"))})),s.addEventListener("click",(()=>{s.contentEditable=!0})),e.append(d,i),e}document.querySelector(".button-box").addEventListener("click",(t=>{})),function(){let t=["#FAEDCB","#C9E4DE","#C6DEF1","#D8CDF0","#F2C6DE","#F7D9C4"];for(let e=0;e<c.getProjects().length;e++){let o=p(c.getProjects()[e]),s=Math.floor(5*Math.random()),n=t[s];o.childNodes[0].style.backgroundColor=n,t.splice(s,1),u.appendChild(o)}}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVDLElBQUksYUFDdkJpQixFQUFTZixZQUFjdEQsRUFBV2xCLGFBRWxDLE1BQU13RixFQUFpQnpCLFNBQVNLLGNBQWMsT0FDOUNvQixFQUFlbkIsVUFBVUMsSUFBSSxvQkFFN0JrQixFQUFlQyxPQUFPTCxFQUFVRSxFQUFXQyxHQUUzQyxNQUFNRyxFQUFrQjNCLFNBQVNLLGNBQWMsS0FzQi9DLE9BckJBc0IsRUFBZ0JyQixVQUFVQyxJQUFJLG9CQUM5Qm9CLEVBQWdCbEIsWUFBY3RELEVBQVczQixZQUl6Q3lCLEVBQUtnRSxpQkFBaUIsU0FBVUMsSUFDMUJBLEVBQUVVLFFBQVVMLElBQ1ZJLEVBQWdCckIsVUFBVWEsU0FBUyxXQUNyQ1EsRUFBZ0JyQixVQUFVYyxPQUFPLFdBRWpDTyxFQUFnQnJCLFVBQVVDLElBQUksV0FFbEMsSUFHRmdCLEVBQVVOLGlCQUFpQixTQUFTLEtBQ2xDTSxFQUFVTSxpQkFBa0IsQ0FBSSxJQUdsQzVFLEVBQUt5RSxPQUFPRCxFQUFnQkUsR0FFckIxRSxDQUNULENBeEllK0MsU0FBU0MsY0FBYyxlQUsvQmdCLGlCQUFpQixTQUFVQyxJQUFELElBTWpDLFdBRUUsSUFBSVksRUFBYSxDQUNmLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxXQUdGLElBQUssSUFBSWhELEVBQUksRUFBR0EsRUFBSWQsRUFBU0UsY0FBY2EsT0FBUUQsSUFBSyxDQUN0RCxJQUVJc0IsRUFBYUYsRUFGSGxDLEVBQVNFLGNBQWNZLElBTWpDaUQsRUFBZUMsS0FBS0MsTUFBc0IsRUFBaEJELEtBQUtFLFVBQy9CQyxFQUFVTCxFQUFXQyxHQUNMM0IsRUFBV2dDLFdBQVcsR0FFNUJyQixNQUFNQyxnQkFBa0JtQixFQUd0Q0wsRUFBV08sT0FBT04sRUFBYyxHQUVoQ2hDLEVBQUtZLFlBQVlQLEVBQ25CLENBQ0YsQ0FFQWtDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlID0gXCJcIikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZShuZXdUaXRsZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLnRpdGxlID0gbmV3VGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZHVlRGF0ZSA9PSBcIlwiKSB7XHJcbiAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IGRheSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICBsZXQgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgIGxldCB0b2RheSA9IGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XHJcblxyXG4gICAgICByZXR1cm4gdG9kYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZShuZXdEYXRlKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kbztcclxuIiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuZXdOYW1lKSB7XHJcbiAgICByZXR1cm4gKHRoaXMubmFtZSA9IG5ld05hbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIGdldFRvZG8oY2hvc2VuVG9kb09iamVjdCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby50aXRsZSA9PT0gY2hvc2VuVG9kb09iamVjdC50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG9PYmplY3QpIHtcclxuICAgIGlmICh0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8udGl0bGUgPT09IHRvZG9PYmplY3QudGl0bGUpKSByZXR1cm47XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kb09iamVjdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvKHRvZG9UaXRsZVRvQmVEZWxldGVkKSB7XHJcbiAgICByZXR1cm4gKHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcihcclxuICAgICAgKHRvZG8pID0+IHRvZG8udGl0bGUgIT09IHRvZG9UaXRsZVRvQmVEZWxldGVkXHJcbiAgICApKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmNsYXNzIFRvZG9zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChcIlRoaXMgV2Vla1wiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIE1vbnRoXCIpKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QobmV3UHJvamVjdE9iamVjdCkge1xyXG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5uYW1lID09PSBuZXdQcm9qZWN0T2JqZWN0Lm5hbWUpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdE9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9kb3MoKSB7XHJcbiAgICBsZXQgdG9kYXlQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGxldCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIGxldCB0b2RheSA9IGRhdGUgKyBcIi9cIiArIG1vbnRoICsgXCIvXCIgKyB5ZWFyO1xyXG5cclxuICAgIGxldCBtb250aFByb2plY3QgPSB0aGlzLmdldFByb2plY3QoXCJUaGlzIE1vbnRoXCIpO1xyXG4gICAgbGV0IHdlZWtQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpO1xyXG5cclxuICAgIC8vIE1vbnRoIFByb2plY3Qgc29ydGluZyBnb2VzIGZpcnN0IHNvIHRoYXQgYW55IHRvZG9zIHRoYXQgYXJlIGFjdHVhbGx5IGZvciBUb2RheSBnZXRzIGNhdWdodCBpbiB0aGUgd2VlayBmb3IgbG9vcFxyXG5cclxuICAgIC8vIE1PTlRIIEZPUiBMT09QXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbnRoUHJvamVjdC5nZXRUb2RvcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0b2RvID0gbW9udGhQcm9qZWN0LmdldFRvZG9zKClbaV07XHJcbiAgICAgIGxldCB0b2RvRGF0ZSA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICAgICAgLy8gVE9ETyBjaGVjayBkYXRlIHR5cGVPZiB3aGVuIG1ha2luZyBkdWVEYXRlIG9mIHRvZG8gZnJvbSBhIGNhbGVuZGFyIHBpY2tlclxyXG4gICAgICBsZXQgZGF0ZUFycmF5ID0gdG9kb0RhdGUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICBsZXQgdG9kb0RheSA9IE51bWJlcihkYXRlQXJyYXlbMF0pO1xyXG4gICAgICBsZXQgdG9kb01vbnRoID0gTnVtYmVyKGRhdGVBcnJheVsxXSk7XHJcbiAgICAgIGxldCB0b2RvWWVhciA9IE51bWJlcihkYXRlQXJyYXlbMl0pO1xyXG5cclxuICAgICAgLy8gZm9yIGNoZWNraW5nIGlmIGVuZCBvZiB0aGUgd2VlayBpcyBwYXN0IG51bWJlciBvZiBkYXlzIGluIGEgbW9udGhcclxuICAgICAgbGV0IG51bWJlck9mRGF5c0luTW9udGggPSBkYXlzSW5Nb250aChtb250aCwgeWVhcik7XHJcbiAgICAgIGxldCBlbmRPZldlZWtEYXkgPSBkYXRlICsgNjtcclxuICAgICAgbGV0IGVuZE9mTW9udGggPSBtb250aDtcclxuICAgICAgbGV0IGVuZE9mWWVhciA9IHllYXI7XHJcblxyXG4gICAgICBpZiAoZW5kT2ZXZWVrRGF5ID4gbnVtYmVyT2ZEYXlzSW5Nb250aCkge1xyXG4gICAgICAgIGVuZE9mV2Vla0RheSA9IDE7XHJcbiAgICAgICAgZW5kT2ZNb250aCArPSAxO1xyXG5cclxuICAgICAgICAvLyByZXNldCBtb250aCB0byBKYW51YXJ5IGFuZCBhZGQgMSB0byB5ZWFyXHJcbiAgICAgICAgaWYgKGVuZE9mTW9udGggPT09IDEzKSB7XHJcbiAgICAgICAgICBlbmRPZk1vbnRoID0gMTtcclxuICAgICAgICAgIGVuZE9mWWVhciArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVmb3JtYXQgZm9yIHByb3BlciBjb21wYXJpc29uc1xyXG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IGVuZE9mV2Vla0RhdGUgPSBuZXcgRGF0ZShlbmRPZlllYXIsIGVuZE9mTW9udGggLSAxLCBlbmRPZldlZWtEYXkpO1xyXG4gICAgICBsZXQgdG9kb0R1ZURhdGUgPSBuZXcgRGF0ZSh0b2RvWWVhciwgdG9kb01vbnRoIC0gMSwgdG9kb0RheSk7XHJcblxyXG4gICAgICBpZiAodG9kb0R1ZURhdGUgPj0gc3RhcnREYXRlICYmIHRvZG9EdWVEYXRlIDw9IGVuZE9mV2Vla0RhdGUpIHtcclxuICAgICAgICB3ZWVrUHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG4gICAgICAgIG1vbnRoUHJvamVjdC5kZWxldGVUb2RvKHRvZG8udGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV0VFSyBGT1IgTE9PUFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrUHJvamVjdC5nZXRUb2RvcygpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0b2RvID0gd2Vla1Byb2plY3QuZ2V0VG9kb3MoKVtpXTtcclxuICAgICAgaWYgKHRvZG8uZ2V0RHVlRGF0ZSgpID09PSB0b2RheSkge1xyXG4gICAgICAgIHRvZGF5UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xyXG4gICAgICAgIHdlZWtQcm9qZWN0LmRlbGV0ZVRvZG8odG9kby50aXRsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG9zIGZyb20gXCIuL1RvZG9zXCI7XHJcblxyXG4vLyBURVNUXHJcbmxldCB0ZXN0VG9kbyA9IG5ldyBUb2RvKFwiVG9kbyAxXCIsIFwibmV3IHRlc3QgZm9yIHRvZG8gYm94IDFcIik7XHJcbmxldCB0ZXN0VG9kbzIgPSBuZXcgVG9kbyhcIlRvZG8gMlwiLCBcIm5ldyB0ZXN0IGZvciB0b2RvIGJveCAyXCIpO1xyXG5sZXQgdGVzdFRvZG8zID0gbmV3IFRvZG8oXCJUb2RvIDNcIiwgXCJuZXcgdGVzdCBmb3IgdG9kbyBib3ggM1wiKTtcclxubGV0IGRhdGVTb3J0VGVzdCA9IG5ldyBUb2RvKFwiVG9kbyA1XCIsIFwibmV3IHRlc3QgZm9yIGRhdGUgc29ydGluZ1wiLCBcIjE1LzEvMjAyNVwiKTtcclxubGV0IG1vbnRoVGVzdCA9IG5ldyBUb2RvKFwiTW9udGggdGVzdFwiLCBcInRlc3RpbmcgbW9udGggc29ydFwiLCBcIjI2LzEvMjAyNVwiKTtcclxuXHJcbmNvbnN0IGFsbFRvZG9zID0gbmV3IFRvZG9zKCk7XHJcblxyXG5jb25zdCB0b2RheVRvZG9zID0gYWxsVG9kb3MuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG5jb25zdCB3ZWVrVG9kb3MgPSBhbGxUb2Rvcy5nZXRQcm9qZWN0KFwiVGhpcyBXZWVrXCIpO1xyXG5jb25zdCBtb250aFRvZG9zID0gYWxsVG9kb3MuZ2V0UHJvamVjdChcIlRoaXMgTW9udGhcIik7XHJcblxyXG50b2RheVRvZG9zLmFkZFRvZG8odGVzdFRvZG8pO1xyXG50b2RheVRvZG9zLmFkZFRvZG8odGVzdFRvZG8yKTtcclxudG9kYXlUb2Rvcy5hZGRUb2RvKHRlc3RUb2RvMyk7XHJcblxyXG53ZWVrVG9kb3MuYWRkVG9kbyhkYXRlU29ydFRlc3QpO1xyXG5cclxubW9udGhUb2Rvcy5hZGRUb2RvKG1vbnRoVGVzdClcclxuXHJcbmFsbFRvZG9zLnNvcnRUb2RvcygpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gRE9NIEVMRU1FTlRTXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJvYXJkXCIpO1xyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1ib3hcIilcclxuXHJcblxyXG4vLyBMaXN0ZW5lcnNcclxuXHJcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBcclxufSlcclxuXHJcbi8vIERPTSBMb2FkZXJzXHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XHJcbiAgLy8gdG8gZW5zdXJlIG5vIGNvbG9yIHJlcGVhdHNcclxuICBsZXQgY29sb3JBcnJheSA9IFtcclxuICAgIFwiI0ZBRURDQlwiLFxyXG4gICAgXCIjQzlFNERFXCIsXHJcbiAgICBcIiNDNkRFRjFcIixcclxuICAgIFwiI0Q4Q0RGMFwiLFxyXG4gICAgXCIjRjJDNkRFXCIsXHJcbiAgICBcIiNGN0Q5QzRcIixcclxuICBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRvZG9zLmdldFByb2plY3RzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsVG9kb3MuZ2V0UHJvamVjdHMoKVtpXTtcclxuXHJcbiAgICBsZXQgcHJvamVjdEJveCA9IGNyZWF0ZVByb2plY3RCb3gocHJvamVjdCk7XHJcblxyXG4gICAgLy8gQ29sb3IgZWFjaCBwcm9qZWN0IGhlYWRlciBkaWZmZXJlbnRseVxyXG5cclxuICAgIGxldCBiZ0NvbG9ySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcclxuICAgIGxldCBiZ0NvbG9yID0gY29sb3JBcnJheVtiZ0NvbG9ySW5kZXhdO1xyXG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBwcm9qZWN0Qm94LmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgcHJvamVjdEhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiZ0NvbG9yO1xyXG5cclxuICAgIC8vIFJlbW92ZSBjb2xvciBmcm9tIGFycmF5IHNvIGl0IGNhbid0IGJlIHBpY2tlZCBhZ2FpblxyXG4gICAgY29sb3JBcnJheS5zcGxpY2UoYmdDb2xvckluZGV4LCAxKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RCb3gpO1xyXG4gIH1cclxufVxyXG5cclxuc2hvd1Byb2plY3RzKCk7XHJcblxyXG4vLyBET00gQ3JlYXRpb24gRnVuY3Rpb25zXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Qm94KHByb2plY3RPYmplY3QpIHtcclxuICBjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJveFwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyXCIpO1xyXG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqZWN0Lm5hbWU7XHJcblxyXG4gIGNvbnN0IHByb2plY3RUb2RvcyA9IHByb2plY3RPYmplY3QuZ2V0VG9kb3MoKTtcclxuXHJcbiAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuXHJcbiAgaWYgKHByb2plY3RUb2Rvcy5sZW5ndGggIT0gMCkge1xyXG4gICAgY29uc3QgdG9kb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJveFwiKTtcclxuICAgIHRvZG9Cb3guY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRvZG8gPSBwcm9qZWN0VG9kb3NbaV07XHJcbiAgICAgIGxldCB0b2RvRWwgPSBjcmVhdGVUb2RvQm94KHRvZG8pO1xyXG5cclxuICAgICAgaWYgKGkgJSAyID09IDEpIHtcclxuICAgICAgICB0b2RvRWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZTRlNGU0XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kb0VsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG9kb0JveC5hcHBlbmRDaGlsZCh0b2RvRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQodG9kb0JveCk7XHJcblxyXG4gICAgLy8gTGlzdGVuZXJzXHJcblxyXG4gICAgcHJvamVjdEJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRvZG9Cb3guY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJsZVwiKSkge1xyXG4gICAgICAgIHRvZG9Cb3guY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kb0JveC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvamVjdEJveDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kb0JveCh0b2RvT2JqZWN0KSB7XHJcbiAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcclxuXHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWQtaWRcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xyXG4gIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG9PYmplY3QudGl0bGU7XHJcblxyXG4gIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcclxuICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9PYmplY3QuZ2V0RHVlRGF0ZSgpO1xyXG5cclxuICBjb25zdCBjaGVja1RpdGxlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hlY2tUaXRsZURhdGUuY2xhc3NMaXN0LmFkZChcImNoZWNrLXRpdGxlLWRhdGVcIik7XHJcblxyXG4gIGNoZWNrVGl0bGVEYXRlLmFwcGVuZChjaGVja0JveCwgdG9kb1RpdGxlLCB0b2RvRGF0ZSk7XHJcblxyXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcclxuICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvT2JqZWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAvLyBMaXN0ZW5lcnNcclxuXHJcbiAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCAhPSB0b2RvVGl0bGUpIHtcclxuICAgICAgaWYgKHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHRvZG9UaXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICB0b2RvLmFwcGVuZChjaGVja1RpdGxlRGF0ZSwgdG9kb0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgcmV0dXJuIHRvZG87XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJ0aGlzIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJzZXREYXRlIiwibmFtZSIsInRvZG9zIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJuZXdOYW1lIiwiZ2V0VG9kb3MiLCJnZXRUb2RvIiwiY2hvc2VuVG9kb09iamVjdCIsImZpbmQiLCJ0b2RvIiwiYWRkVG9kbyIsInRvZG9PYmplY3QiLCJwdXNoIiwiZGVsZXRlVG9kbyIsInRvZG9UaXRsZVRvQmVEZWxldGVkIiwiZmlsdGVyIiwiZGF5c0luTW9udGgiLCJtb250aCIsInllYXIiLCJ0ZXN0VG9kbyIsInRlc3RUb2RvMiIsInRlc3RUb2RvMyIsImRhdGVTb3J0VGVzdCIsIm1vbnRoVGVzdCIsImFsbFRvZG9zIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImdldFByb2plY3QiLCJwcm9qZWN0TmFtZSIsInByb2oiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdE9iamVjdCIsInNvcnRUb2RvcyIsInRvZGF5UHJvamVjdCIsImRhdGUiLCJ0b2RheSIsIm1vbnRoUHJvamVjdCIsIndlZWtQcm9qZWN0IiwiaSIsImxlbmd0aCIsImRhdGVBcnJheSIsInNwbGl0IiwidG9kb0RheSIsIk51bWJlciIsInRvZG9Nb250aCIsInRvZG9ZZWFyIiwiZW5kT2ZXZWVrRGF5IiwiZW5kT2ZNb250aCIsImVuZE9mWWVhciIsInN0YXJ0RGF0ZSIsImVuZE9mV2Vla0RhdGUiLCJ0b2RvRHVlRGF0ZSIsInRvZGF5VG9kb3MiLCJ3ZWVrVG9kb3MiLCJtb250aFRvZG9zIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZVByb2plY3RCb3giLCJwcm9qZWN0T2JqZWN0IiwicHJvamVjdEJveCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcm9qZWN0SGVhZGVyIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0VG9kb3MiLCJhcHBlbmRDaGlsZCIsInRvZG9Cb3giLCJ0b2RvRWwiLCJjcmVhdGVUb2RvQm94Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiY2hlY2tCb3giLCJzZXRBdHRyaWJ1dGUiLCJ0b2RvVGl0bGUiLCJ0b2RvRGF0ZSIsImNoZWNrVGl0bGVEYXRlIiwiYXBwZW5kIiwidG9kb0Rlc2NyaXB0aW9uIiwidGFyZ2V0IiwiY29udGVudEVkaXRhYmxlIiwiY29sb3JBcnJheSIsImJnQ29sb3JJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImJnQ29sb3IiLCJjaGlsZE5vZGVzIiwic3BsaWNlIiwic2hvd1Byb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==