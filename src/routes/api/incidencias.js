const router = require("express").Router();
const IncidenciasController = require("../../controllers/incidencias.controller");
const {checkIncidenciaId, validateIncidencia} = require('../../middlewares/incidencias.middleware');

// GET

router.get("/:pagina", IncidenciasController.getAllIncidencias );

router.get("/byId/:idIncidencia", checkIncidenciaId, IncidenciasController.getIncidenciaById);

router.get("/usuario/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasByIdEmpleado);

router.get("/noVistas/:usuario_asignado/:pagina", IncidenciasController.getAllIncidenciasNoVistasByIdEmpleado);

// POST

router.post("/", validateIncidencia, IncidenciasController.createIncidencia);

// UPDATE
router.put("/:idIncidencia", checkIncidenciaId, validateIncidencia, IncidenciasController.updateIncidencia);

router.put("/vista/:idIncidencia", checkIncidenciaId, validateIncidencia, IncidenciasController.updateIncidenciaToVista);

router.put("/noVista/:idIncidencia", IncidenciasController.updateIncidenciaToNoVista);







module.exports = router;