"""Tiny proxy — forwards contact form POST to mario.team API (localhost)."""

import json
import urllib.request
from http.server import HTTPServer, BaseHTTPRequestHandler

MARIO_API = "http://127.0.0.1:8000/public/contact"


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/contact":
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"

        try:
            req = urllib.request.Request(
                MARIO_API,
                data=raw,
                headers={"Content-Type": "application/json"},
            )
            resp = urllib.request.urlopen(req, timeout=10)
            result = resp.read()
            self._respond(200, result)
        except urllib.error.HTTPError as e:
            self._respond(e.code, e.read())
        except Exception as e:
            print(f"Proxy error: {e}")
            self._respond(502, json.dumps({"error": "Backend unavailable"}).encode())

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def _respond(self, code: int, body: bytes):
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        print(f"[contact-api] {args[0]}")


if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", 8100), Handler)
    print("Contact API proxy listening on 127.0.0.1:8100")
    server.serve_forever()
