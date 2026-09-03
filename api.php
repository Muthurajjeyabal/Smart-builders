<?php
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") { http_response_code(204); exit; }

$dir = __DIR__ . "/data";
if (!is_dir($dir)) { mkdir($dir, 0775, true); }
$file = $dir . "/db.json";

$action = isset($_GET["action"]) ? $_GET["action"] : "";

if ($action === "load") {
  if (!file_exists($file)) {
    echo json_encode(["users" => [], "tenants" => new stdClass()]);
    exit;
  }
  echo file_get_contents($file);
  exit;
}

if ($action === "save" && $_SERVER["REQUEST_METHOD"] === "POST") {
  $raw = file_get_contents("php://input");
  json_decode($raw);
  if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "invalid json"]);
    exit;
  }
  $tmp = $file . ".tmp";
  file_put_contents($tmp, $raw, LOCK_EX);
  rename($tmp, $file);
  echo json_encode(["ok" => true]);
  exit;
}

http_response_code(400);
echo json_encode(["ok" => false, "error" => "unknown action"]);
