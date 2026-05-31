<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Video Library | Admin Dashboard</title>
<!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

  <!-- React -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Babel -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Virtual DOM -->
<script type="text/babel">

function AdminIndex(){
return(
<div className="row">
<div className="col-2">
<DashboardSideBar />
</div>
<div className="col-10">
<DashboardHeader />
<DashboardSection />
</div>
</div>
)
}

function DashboardHeader(){
return(
<header className="d-flex mt-2 p-3 bg-success fs-5 text-white flex-row justify-content-between">
<div>
<div className="input-group">
<input type="text" placeholder="search video library" className="form-control" />
<button className="btn bi bi-search btn-dark"></button>
</div>
</div>
<div>
<span className="bi bi-bell-fill"></span>
<span className="bi bi-gear-fill mx-3"></span>
<span className="bi bi-person-fill">Signout</span>

</div>
</header>
)
}

function DashboardSideBar(){
return(
<div role="side-bar" className="side-bar bg-success text-white">
<nav className="p-2 mt-2">
<div className="fw-bold fs-5">
<span className="bi bi-collection-play"> Video Library </span>
</div>
<div>Management Console</div>
<ul className="mt-5 list-group">
<li className="list-group-item list-group-item-success"> <span className="bi bi-columns"></span> <span>Dashboard</span> </li>
<li className="list-group-item list-group-item-success"> <span className="bi bi-collection-play"></span> <span>Video Library</span> </li>
<li className="list-group-item list-group-item-success"> <span className="bi bi-graph-up"></span> <span>Analytics</span> </li>
<li className="list-group-item list-group-item-success"> <span className="bi bi-people-fill"></span> <span>Users</span> </li>
<li className="list-group-item list-group-item-success"> <span className="bi bi-gear-fill"></span> <span>Settings</span> </li>
</ul>
<div className="mt-2">
<label className="fw-bold">Filters & Search</label>
<div className="input-group">
<span className="input-group-text"><span className="bi bi-search"></span></span>
<input type="text" className="form-control ps-2" placeholder="Quick search" />
</div>
</div>
<div className="mt-2">
<label className="fw-bold">Category</label>
<div>
<select className="form-select">
<option>Select Category</option>
</select>
</div>
</div>
<div className="mt-2">
<label className="fw-bold">Status</label>
<div> <input type="checkbox" /> <label>Published</label> </div>
<div> <input type="checkbox" /> <label>Draft</label> </div>
<div> <input type="checkbox" /> <label>Processing</label> </div>
</div>
</nav>
</div>
)
}

function DashboardSection(){
return(
<section>
<div className="my-3 d-flex justify-content-between">
<div className="h3">
<span>Video Management</span>
</div>
<button className="bi bi-plus btn btn-success"> Add Video </button>
</div>
<DashboardAnalytics />
<DashboardGrid />
</section>
)
}

function DashboardAnalytics(){
return(
<article className="d-flex">
<div className="card w-25">
Card-1
</div>
<div className="card w-25 mx-2">
Card-2
</div>
<div className="card w-25">
Card-3
</div>
<div className="card w-25 ms-2">
Card-4
</div>
</article>
)
}

function DashboardGrid(){
return(
<div className="mt-5 ">
<table className="table mt-4 table-striped table-hover table-success">
<thead>
<th>S.No</th>
<th>Title </th>
<th>Preview</th>
<th>Status</th>
<th>Actions</th>
</thead>
<tbody>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<button className="btn btn-warning bi bi-pen-fill"></button>
<button className="btn btn-danger bi bi-trash mx-2"></button>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<button className="btn btn-warning bi bi-pen-fill"></button>
<button className="btn btn-danger bi bi-trash mx-2"></button>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<button className="btn btn-warning bi bi-pen-fill"></button>
<button className="btn btn-danger bi bi-trash mx-2"></button>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<button className="btn btn-warning bi bi-pen-fill"></button>
<button className="btn btn-danger bi bi-trash mx-2"></button>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>
<button className="btn btn-warning bi bi-pen-fill"></button>
<button className="btn btn-danger bi bi-trash mx-2"></button>
</td>
</tr>
</tbody>
</table>
</div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AdminIndex/>);
</script>
</head>
<body class="container-fluid">
<noscript> Please enable Javascript in browser </noscript>
<div id="root"></div>
</body>
</html>
